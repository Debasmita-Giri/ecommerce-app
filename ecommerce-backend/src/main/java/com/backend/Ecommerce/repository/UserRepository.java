package com.backend.Ecommerce.repository;


import com.backend.Ecommerce.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

	@Query("SELECT u.id FROM User u WHERE u.email = :email")
	Long findUserIdByEmail(@Param("email") String email);

}
