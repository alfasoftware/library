package library;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface LoanRepository extends CrudRepository<Loan, Integer> {

  @Query("from Loan l inner join Book b on l.bookOnLoan = b where b.isbn=:isbn and l.user.id=:userId and l.returned = false order by l.dueDate")
  List<Loan> findActiveLoansBy(@Param("isbn")String isbn, @Param("userId")String userId);

  List<Loan> findByUserId(String userId);

  List<Loan> findByUserIdAndReturnedFalse(String userId);

  @Query("from Loan l inner join Book b on l.bookOnLoan = b where b.isbn=:isbn and l.returned = false order by l.dueDate")
  List<Loan> findActiveLoansBy(@Param("isbn")String isbn);
}
