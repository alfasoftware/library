package library;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

interface NewBookRequestRepository extends CrudRepository<NewBookRequest, Long> {

List<NewBookRequest> findNewBookRequestsByUserId(String userId);
}

