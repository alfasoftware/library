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

  public Integer getId() {
    return id;
  }

  void setId(Integer id) {
    this.id = id;
  }

  public Integer getBookOnLoan() {
    return bookOnLoan;
  }

  void setBookOnLoan(Integer bookOnLoan) {
    this.bookOnLoan = bookOnLoan;
  }

  public String getUser() {
    return user;
  }

  void setUser(String user) {
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

  public void setDueDate(LocalDate dueDate) {
    this.dueDate = dueDate;
  }

  public boolean isReturned() {
    return returned;
  }

  public void setReturned(boolean returned) {
    this.returned = returned;
  }
}