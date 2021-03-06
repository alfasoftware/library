package library;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Loan {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "bookId", referencedColumnName = "id")
  private Book bookOnLoan;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "userId", referencedColumnName = "id")
  private User user;

  private LocalDate checkoutDate;

  private LocalDate dueDate;

  private boolean returned;

  public Integer getId() {
    return id;
  }

  void setId(Integer id) {
    this.id = id;
  }

  public Book getBookOnLoan() {
    return bookOnLoan;
  }

  void setBookOnLoan(Book bookOnLoan) {
    this.bookOnLoan = bookOnLoan;
  }

  public User getUser() {
    return user;
  }

  void setUser(User user) {
    this.user = user;
  }

  public LocalDate getCheckoutDate() {
    return checkoutDate;
  }

  void setCheckoutDate(LocalDate checkoutDate) {
    this.checkoutDate = checkoutDate;
  }

  public LocalDate getDueDate() {
    return dueDate;
  }

  void setDueDate(LocalDate dueDate) {
    this.dueDate = dueDate;
  }

  public boolean isReturned() {
    return returned;
  }

  void setReturned(boolean returned) {
    this.returned = returned;
  }
}