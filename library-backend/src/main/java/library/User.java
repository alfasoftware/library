package library;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

  protected User() {}

  @Id
  private String id;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }
}
