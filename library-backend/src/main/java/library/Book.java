package library;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
class Book {

  protected Book() {}

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private long isbn;

  private boolean checkedOut;

  Book(final Long isbn) {
    this.isbn = isbn;
  }

  public Long getId() {
    return id;
  }

  public long getIsbn() {
    return isbn;
  }

  public  boolean isCheckedOut() {
    return checkedOut;
  }

  void setCheckedOut(boolean checkedOut) {
    this.checkedOut = checkedOut;
  }
}
