package library.api;

import java.time.LocalDate;

import library.Loan;


/**
 * Wrapper for a {@link Loan}, with information about the {@link Volumes}.
 */
public class LoanEntry {

  private final Volumes volume;

  private final String user;

  private final LocalDate checkoutDate;

  private final LocalDate dueDate;

  private final boolean returned;

  public LoanEntry(Volumes volume, Loan loan) {
    this.volume = volume;
    this.user = loan.getUser().getId();
    this.checkoutDate = loan.getCheckoutDate();
    this.dueDate = loan.getDueDate();
    this.returned = loan.isReturned();
  }


  public Volumes getVolume() {
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
