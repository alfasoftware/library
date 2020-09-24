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

  public Long getId() {
    return id;
  }

  public long getIsbn() {
    return isbn;
  }

  void setIsbn(final long isbn) {
    this.isbn = isbn;
  }
}
