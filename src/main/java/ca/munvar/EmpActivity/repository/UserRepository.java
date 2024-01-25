package ca.munvar.EmpActivity.repository;

import ca.munvar.EmpActivity.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserName(String userName);

    Boolean existsByEmail(String email);

    Boolean existsByUserName(String userName);

    Optional<User> findByUserNameOrEmail(String userName, String email);
}
