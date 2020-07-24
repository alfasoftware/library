package library;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Integer> {

  @Override
  List<Book> findAll();

  List<Book> findBookByIsbnAndCheckedOutFalse(long isbn);
}