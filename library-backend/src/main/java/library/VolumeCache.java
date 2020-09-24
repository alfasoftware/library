package library;


import java.util.Optional;
import java.util.concurrent.ConcurrentMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.google.api.services.books.model.Volume;
import com.google.common.collect.Maps;

/**
 * Maps from an isbn to an external {@link com.google.api.services.books.model.Volume} object.
 *
 * If the {@link com.google.api.services.books.model.Volume} for a particular isbn has already been requested in the session,
 * we get the cached value to avoid additional calls to the Google books API.
 */
@Service
@Scope("singleton")
class VolumeCache {

  private final RestTemplate restTemplate;

  private final ConcurrentMap<Long, Volume> isbnToVolumeCache = Maps.newConcurrentMap();

  @Autowired
  VolumeCache(final BookRepository bookRepository, final RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder.build();
    bookRepository.findAll()
      .stream()
      .map(Book::getIsbn)
      .distinct()
      .forEach(this::getVolumeAndAddToCache);
  }

  Volume getFor(long isbn) {
    return Optional.ofNullable(isbnToVolumeCache.get(isbn))
      .orElseGet(() -> getVolumeAndAddToCache(isbn));
  }

  private Volume getVolumeAndAddToCache(final long isbn) {
    final Volume volumeToCache = restTemplate.getForObject("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn, Volume.class);
    isbnToVolumeCache.put(isbn, volumeToCache);
    return volumeToCache;
  }
}