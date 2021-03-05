package library;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

interface WatchersRepository extends CrudRepository<Watchers, Long> {

  @Query("select w.isbn from Watchers w where w.user.id = :userId")
  List<String> findIsbnsByUserId(@Param("userId") String userId);

  boolean existsByIsbnAndUserId(long isbn, String userId);

  void deleteByIsbnAndUserId(long isbn, String userId);
}
