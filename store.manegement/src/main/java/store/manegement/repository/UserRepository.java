package store.manegement.repository;

import store.manegement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Add custom query methods if needed, e.g., by email or role
    User findByEmail(String email);
   
    public User findByEmailAndPassword(String email,String password);
}
