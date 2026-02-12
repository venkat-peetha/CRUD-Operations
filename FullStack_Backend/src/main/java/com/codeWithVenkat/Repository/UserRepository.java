package com.codeWithVenkat.Repository;

import com.codeWithVenkat.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
