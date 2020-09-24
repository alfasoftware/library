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

  private String author;

  private String title;

  private String description;

  private String imageUrl;

  private boolean checkedOut; // TODO remove?

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

  void setIsbn(final long isbn) {
    this.isbn = isbn;
  }

  String getAuthor() {
    return author;
  }

  void setAuthor(final String author) {
    this.author = author;
  }

  String getTitle() {
    return title;
  }

  void setTitle(final String title) {
    this.title = title;
  }

  String getDescription() {
    return description;
  }

  void setDescription(final String description) {
    this.description = description;
  }

  String getImageUrl() {
    return imageUrl;
  }

  void setImageUrl(final String imageUrl) {
    this.imageUrl = imageUrl;
  }
}
