package library;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {

  @Override
  List<Book> findAll();

  @Query("from Book b where b.isbn=:isbn and not exists (select distinct 1 from Loan l where l.bookOnLoan = b and l.returned = false)")
  List<Book> findAvailableBooksByIsbn(String isbn);

  @Query("select new library.IsbnToCopies(b.isbn, count(b.isbn)) from Book b")
  List<IsbnToCopies> getAllIsbnsToNumberOfCopies();
}