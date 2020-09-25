package library.api;

import java.util.List;
import java.util.Map;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

import com.google.api.client.util.Lists;
import com.google.common.collect.Maps;

/**
 * Wrapper for {@link com.google.api.services.books.v1.model.Volume.VolumeInfo}.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class VolumeInfo {

  private String title;
  private String publisher;
  private List<String> authors = Lists.newArrayList();
  private String description;
  private Map<String, String> imageLinks = Maps.newHashMap();
  private Object[] industryIdentifiers;
  private String subtitle;
  private String publishedDate;

  public String getSubtitle() {
    return subtitle;
  }

  public void setSubtitle(final String subtitle) {
    this.subtitle = subtitle;
  }

  public String getPublishedDate() {
    return publishedDate;
  }

  public void setPublishedDate(final String publishedDate) {
    this.publishedDate = publishedDate;
  }

  public Object[] getIndustryIdentifiers() {
    return industryIdentifiers;
  }

  public void setIndustryIdentifiers(final Object[] industryIdentifiers) {
    this.industryIdentifiers = industryIdentifiers;
  }

  public List<String> getCategories() {
    return categories;
  }

  public void setCategories(final List<String> categories) {
    this.categories = categories;
  }

  private List<String> categories = Lists.newArrayList();

  public String getTitle() {
    return title;
  }

  public void setTitle(final String title) {
    this.title = title;
  }

  public List<String> getAuthors() {
    return authors;
  }

  public void setAuthors(final List<String> authors) {
    this.authors = authors;
  }

  public String getPublisher() {
    return publisher;
  }

  public void setPublisher(String publisher) {
    this.publisher = publisher;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(final String description) {
    this.description = description;
  }

  public Map<String, String> getImageLinks() {
    return imageLinks;
  }

  public void setImageLinks(final Map<String, String> imageLinks) {
    this.imageLinks = imageLinks;
  }
}