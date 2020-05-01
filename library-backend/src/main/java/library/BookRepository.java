package library;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface BookRepository extends CrudRepository<Book, Integer> {

  @Override
  List<Book> findAll();

  @Query("from Book where isbn=:isbn and checkedOut=false")
  List<Book> findAvailableBooksByIsbn(@Param("isbn") long isbn);
}