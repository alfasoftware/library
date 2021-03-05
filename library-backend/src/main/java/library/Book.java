package library;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.google.api.client.util.Lists;

@Entity
class Book {

  protected Book() {}

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private Long isbn;

  public Long getId() {
    return id;
  }

  public Long getIsbn() {
    return isbn;
  }

  void setIsbn(final Long isbn) {
    this.isbn = isbn;
  }
}
