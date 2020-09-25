package library;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import library.api.CheckoutOrReturnRequest;
import library.api.LoanEntry;
import library.api.Volumes;

@RestController
class Controller {

  private final BookRepository bookRepository;
  private final LoanRepository loanRepository;
  private final VolumesCache volumesCache;

  @Autowired
  Controller(BookRepository bookRepository, final LoanRepository loanRepository, final VolumesCache volumesCache) {
    this.bookRepository = bookRepository;
    this.loanRepository = loanRepository;
    this.volumesCache = volumesCache;
  }


  @CrossOrigin
  @GetMapping(path = "/api/catalogue")
  public List<CatalogueEntry> getCatalogue() {
    return bookRepository.getAllIsbnsToAvailableCopies()
      .stream()
      .map(b -> new CatalogueEntry(volumesCache.getFor(b.getIsbn()), b.getAvailableCopies()))
      .collect(Collectors.toList());
  }


  @CrossOrigin
  @PostMapping(path = "/api/addBook")
  public Volumes addNewBook(@RequestBody long isbn) {
    // Save isbn to our database of books
    final Book bookToSave = new Book();
    bookToSave.setIsbn(isbn);
    bookRepository.save(bookToSave);

    // Cache detailed volume information and return.
    return volumesCache.getFor(isbn);
  }


  @CrossOrigin
  @GetMapping(path = "/api/volumeDetails")
  public Volumes getVolumeDetails(@RequestParam long isbn) {
    return volumesCache.getFor(isbn);
  }


  @CrossOrigin
  @PostMapping(path = "/api/checkOutBook")
  public LoanEntry checkOutBook(@RequestBody CheckoutOrReturnRequest request) {
    final List<Book> availableBooks = bookRepository.findAvailableBooksByIsbn(request.getIsbn());
    if(availableBooks.isEmpty()) throw new RuntimeException("No available copies of " + request.getIsbn());

    final Book firstAvailableBook = availableBooks.get(0);

    final Loan loan = new Loan();
    final LocalDate now = LocalDate.now();
    loan.setBookOnLoan(firstAvailableBook);
    loan.setCheckoutDate(now);
    loan.setDueDate(now.plusMonths(1));
    loan.setUser(request.getUserId());

    loanRepository.save(loan);

    final LoanEntry response = new LoanEntry(volumesCache.getFor(request.getIsbn()), loan);
    return response;
  }


  @CrossOrigin
  @GetMapping(path = "/api/allUserLoans")
  public List<LoanEntry> allUserLoans(@RequestParam String user) {
    return loanRepository
            .findByUser(user)
            .stream()
            .map(l -> new LoanEntry(volumesCache.getFor(l.getBookOnLoan().getIsbn()), l))
            .collect(Collectors.toList());
  }


  @CrossOrigin
  @GetMapping(path = "/api/allActiveUserLoans")
  public List<LoanEntry> allActiveUserLoans(@RequestParam String user) {
    return loanRepository
      .findByUserAndReturnedFalse(user)
      .stream()
      .map(l -> new LoanEntry(volumesCache.getFor(l.getBookOnLoan().getIsbn()), l))
      .collect(Collectors.toList());
  }


  @CrossOrigin
  @PostMapping(path = "/api/returnBook")
  public LoanEntry returnBook(@RequestBody CheckoutOrReturnRequest request) {
    List<Loan> activeLoans = loanRepository.findActiveLoansBy(request.getIsbn(), request.getUserId());

    System.out.println("getUserId: " + request.getUserId());
    if(activeLoans.isEmpty()) throw new RuntimeException("No active loans for user " + request.getUserId() + " and isbn " + request.getIsbn());

    final Loan earliestDueLoan = activeLoans.get(0);
    earliestDueLoan.setReturned(true);

    loanRepository.save(earliestDueLoan);

    final LoanEntry response = new LoanEntry(volumesCache.getFor(request.getIsbn()), earliestDueLoan);
    return response;
  }


  @CrossOrigin
  @GetMapping(path = "/api/search")
  public List<Volumes> search(@RequestBody String searchString) {
    return volumesCache.searchByTitleOrAuthor(searchString);
  }
}