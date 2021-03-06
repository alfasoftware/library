package library;


import java.util.List;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.concurrent.ConcurrentMap;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.common.collect.Maps;
import library.api.Items;
import library.api.Volumes;

/**
 * Maps from an isbn to a {@link Volumes} object (which is a wrapper for {@link com.google.api.services.books.model.Volumes}).
 *
 * If the {@link Volumes} for a particular isbn has already been requested in the session, we get the cached value to avoid
 * additional calls to the Google books API.
 */
@Service
@Scope("singleton")
class VolumesCache {

  private final RestTemplate restTemplate;

  private final ConcurrentMap<Long, Volumes> isbnToVolumeCache = Maps.newConcurrentMap();

  @Autowired
  VolumesCache(final BookRepository bookRepository, final RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
    bookRepository.findAll()
      .stream()
      .map(Book::getIsbn)
      .distinct()
      .forEach(this::getVolumesAndAddToCache);
  }


  Volumes getFor(Long isbn) {
    return Optional.ofNullable(isbnToVolumeCache.get(isbn))
      .orElseGet(() -> getVolumesAndAddToCache(isbn));
  }


  private Volumes getVolumesAndAddToCache(final Long isbn) {

    final Volumes volumeToCache = restTemplate.getForObject("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn, Volumes.class);

    isbnToVolumeCache.put(isbn, volumeToCache);
    isbnToVolumeCache.get(isbn);

    return volumeToCache;
  }
}