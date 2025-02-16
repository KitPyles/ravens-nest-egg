package com.kitpyles.ravensnestegg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.kitpyles.ravensnestegg.model.User;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Method to find user by username
    Optional<User> findByUsername(String username);

    // Method to find user by email
    Optional<User> findByEmail(String email);

    // Method to check if a username is already taken
    boolean existsByUsername(String username);

    // Method to check if an email is already taken
    boolean existsByEmail(String email);
}
