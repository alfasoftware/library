package library;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {

  @Override
  List<Book> findAll();

  @Query("from Book b where b.isbn=:isbn and not exists (select distinct 1 from Loan l where l.bookOnLoan = b and l.returned = false)")
  List<Book> findAvailableBooksByIsbn(long isbn);

  @Query("select new library.IsbnToAvailableCopies(b.isbn, count(b.isbn)) from Book b left join Loan l on b = l.bookOnLoan and l.returned = false where l.returned is null group by b.isbn")
  List<IsbnToAvailableCopies> getAllIsbnsToAvailableCopies();
}