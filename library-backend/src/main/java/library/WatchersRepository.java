package library;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

interface WatchersRepository extends CrudRepository<Watchers, Long> {

  List<String> findIsbnsByUserId(String userId);

}
