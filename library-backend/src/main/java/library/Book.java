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
  private Integer id;

  private long isbn;

  private boolean checkedOut;

  Book(final long isbn) {
    this.isbn = isbn;
  }

  int getId() {
    return id;
  }

  long getIsbn() {
    return isbn;
  }

  boolean isCheckedOut() {
    return checkedOut;
  }

  void setCheckedOut(boolean checkedOut) {
    this.checkedOut = checkedOut;
  }
}
