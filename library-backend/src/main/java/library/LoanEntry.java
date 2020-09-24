package library;

import com.google.api.services.books.model.Volume;

import java.time.LocalDate;

public class LoanEntry {

  private final Volume volume;

  private final String user;

  private final LocalDate checkoutDate;

  private final LocalDate dueDate;

  private final boolean returned;

  public LoanEntry(Volume volume, Loan loan) {
    this.volume = volume;
    this.user = loan.getUser();
    this.checkoutDate = loan.getCheckoutDate();
    this.dueDate = loan.getDueDate();
    this.returned = loan.isReturned();
  }


  public Volume getVolume() {
    return volume;
  }


  public String getUser() {
    return user;
  }

  public LocalDate getCheckoutDate() {
    return checkoutDate;
  }

  public LocalDate getDueDate() {
    return dueDate;
  }

  public boolean isReturned() {
    return returned;
  }


}
