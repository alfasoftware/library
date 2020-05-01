package library;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class Controller {

  private final BookRepository bookRepository;
  private final LoanRepository loanRepository;

  @Autowired
  Controller(BookRepository bookRepository, final LoanRepository loanRepository) {
    this.bookRepository = bookRepository;
    this.loanRepository = loanRepository;
  }

  @GetMapping(path = "/api/catalogue")
  public List<CatalogueEntry> getCatalogue() {

    return bookRepository.findAll()
      .stream()
      .filter(book -> !book.isCheckedOut())
      .collect(Collectors.groupingBy(Book::getIsbn, Collectors.counting()))
      .entrySet()
      .stream()
      .map(entry -> new CatalogueEntry(entry.getKey(), entry.getValue().intValue()))
      .collect(Collectors.toList());
  }

  @PostMapping(path = "/api/addBook")
  public String addNewBook(@RequestBody long isbn) {
    bookRepository.save(new Book(isbn));
    return "SAVED";
  }

  @PostMapping(path = "/api/checkOutBook")
  public Loan checkOutBook(@RequestBody CheckoutOrReturnRequest request) {
    final List<Book> availableBooks = bookRepository.findAvailableBooksByIsbn(request.getIsbn());
    if(availableBooks.isEmpty()) throw new RuntimeException("No available copies of " + request.getIsbn());

    final Book firstAvailableBook = availableBooks.get(0);
    firstAvailableBook.setCheckedOut(true);
    bookRepository.save(firstAvailableBook);

    Loan loan = new Loan();
    loan.setBookOnLoan(firstAvailableBook.getId());
    loan.setCheckoutDate(LocalDate.now());
    loan.setDueDate(LocalDate.now().plusWeeks(3));
    loan.setUser(request.getUserId());

    loanRepository.save(loan);

    return loan;
  }

  @PostMapping(path = "/api/returnBook")
  public Loan returnBook(@RequestBody CheckoutOrReturnRequest request) {
    List<Loan> activeLoans = loanRepository.findActiveLoansBy(request.getIsbn(), request.getUserId());
    if(activeLoans.isEmpty()) throw new RuntimeException("No active loans for user " + request.getUserId() + " and isbn " + request.getIsbn());

    Loan earliestDueLoan = activeLoans.get(0);
    Book book = bookRepository.findById(earliestDueLoan.getBookOnLoan()).orElseThrow(() -> new RuntimeException("No book of ID " + earliestDueLoan.getBookOnLoan()));

    earliestDueLoan.setReturned(true);
    book.setCheckedOut(false);

    bookRepository.save(book);
    loanRepository.save(earliestDueLoan);

    return earliestDueLoan;
  }

}