package library.api;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

/**
 * Wrapper for items within {@link Volumes}.
 */
@JsonIgnoreProperties(ignoreUnknown=true)
public class Items {

  private VolumeInfo volumeInfo;

  public VolumeInfo getVolumeInfo() {
    return volumeInfo;
  }

  public void setVolumeInfo(VolumeInfo volumeInfo) {
    this.volumeInfo = volumeInfo;
  }
}