package library;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
class Loan {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Integer id;

  private Integer bookOnLoan;

  private String user;

  private LocalDate checkoutDate;

  private LocalDate dueDate;

  private boolean returned;


  Integer getId() {
    return id;
  }

  Integer getBookOnLoan() {
    return bookOnLoan;
  }

  void setBookOnLoan(final Integer bookOnLoan) {
    this.bookOnLoan = bookOnLoan;
  }

  String getUser() {
    return user;
  }

  void setUser(final String user) {
    this.user = user;
  }

  LocalDate getCheckoutDate() {
    return checkoutDate;
  }

  void setCheckoutDate(final LocalDate checkoutDate) {
    this.checkoutDate = checkoutDate;
  }

  LocalDate getDueDate() {
    return dueDate;
  }

  void setDueDate(final LocalDate dueDate) {
    this.dueDate = dueDate;
  }

  boolean isReturned() {
    return returned;
  }

  void setReturned(final boolean returned) {
    this.returned = returned;
  }
}