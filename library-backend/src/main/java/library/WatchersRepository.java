package library;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

interface WatchersRepository extends CrudRepository<Watchers, Long> {

  @Query("select w.isbn from Watchers w where w.user.id = :userId")
  List<Long> findIsbnsByUserId(@Param("userId") String userId);

  boolean existsByIsbnAndUserId(long isbn, String userId);

  void deleteByIsbnAndUserId(long isbn, String userId);

  @Query("select count(w) from Watchers w where w.isbn = :isbn")
  int countNumberOfWatchersFor(@Param("isbn") long isbn);
}
