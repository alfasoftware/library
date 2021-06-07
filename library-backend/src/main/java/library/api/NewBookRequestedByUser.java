package library.api;

public class NewBookRequestedByUser {

  private final String userId;

  private final String title;

  private final String author;

  private final String additionalInformation;

  public String getUserId() {
    return userId;
  }

  public String getTitle() {
    return title;
  }

  public String getAuthor() {
    return author;
  }

  public String getAdditionalInformation() {
    return additionalInformation;
  }

  public NewBookRequestedByUser(String userId, String title, String author, String additionalInformation) {
    this.userId = userId;
    this.title = title;
    this.author = author;
    this.additionalInformation = additionalInformation;
  }


}

