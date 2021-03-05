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

  private String isbn;

  @OneToMany(mappedBy = "bookOnLoan", cascade = CascadeType.ALL)
  private List<Loan> loans = Lists.newArrayList();

  public Long getId() {
    return id;
  }

  public String getIsbn() {
    return isbn;
  }

  void setIsbn(final String isbn) {
    this.isbn = isbn;
  }

  public List<Loan> getLoans() {
    return loans;
  }
}
