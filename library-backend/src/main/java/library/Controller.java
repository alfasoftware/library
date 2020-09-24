package library;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.api.services.books.v1.model.Volume;

@RestController
class Controller {

  private final BookRepository bookRepository;
  private final LoanRepository loanRepository;
  private final VolumeCache volumeCache;

  @Autowired
  Controller(BookRepository bookRepository, final LoanRepository loanRepository, final VolumeCache volumeCache) {
    this.bookRepository = bookRepository;
    this.loanRepository = loanRepository;
    this.volumeCache = volumeCache;
  }


  @CrossOrigin
  @GetMapping(path = "/api/catalogue")
  public List<CatalogueEntry> getCatalogue() {
    return bookRepository.getAllIsbnsToAvailableCopies()
      .stream()
      .map(b -> new CatalogueEntry(volumeCache.getFor(b.getIsbn()), b.getAvailableCopies()))
      .collect(Collectors.toList());
  }


  @CrossOrigin
  @PostMapping(path = "/api/addBook")
  public Volume addNewBook(@RequestBody long isbn) {
    // Save isbn to our database of books
    final Book bookToSave = new Book();
    bookToSave.setIsbn(isbn);
    bookRepository.save(bookToSave);

    // Cache detailed volume information and return.
    return volumeCache.getFor(isbn);
  }

  @CrossOrigin
  @PostMapping(path = "/api/checkOutBook")
  public Loan checkOutBook(@RequestBody CheckoutOrReturnRequest request) {
    final List<Book> availableBooks = bookRepository.findAvailableBooksByIsbn(request.getIsbn());
    if(availableBooks.isEmpty()) throw new RuntimeException("No available copies of " + request.getIsbn());

    final Book firstAvailableBook = availableBooks.get(0);

    Loan loan = new Loan();
    loan.setBookOnLoan(firstAvailableBook);
    loan.setCheckoutDate(LocalDate.now());
    loan.setDueDate(LocalDate.now().plusWeeks(3));
    loan.setUser(request.getUserId());

    loanRepository.save(loan);

    return loan;
  }


  @CrossOrigin
  @PostMapping(path = "/api/returnBook")
  public Loan returnBook(@RequestBody CheckoutOrReturnRequest request) {
    List<Loan> activeLoans = loanRepository.findActiveLoansBy(request.getIsbn(), request.getUserId());
    if(activeLoans.isEmpty()) throw new RuntimeException("No active loans for user " + request.getUserId() + " and isbn " + request.getIsbn());

    Loan earliestDueLoan = activeLoans.get(0);
    earliestDueLoan.setReturned(true);

    loanRepository.save(earliestDueLoan);

    return earliestDueLoan;
  }


  @CrossOrigin
  @GetMapping(path = "/api/search")
  public List<Volume> search(@RequestBody String searchString) {
    return volumeCache.searchByTitleOrAuthor(searchString);
  }
}