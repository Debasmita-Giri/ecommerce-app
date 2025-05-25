package com.backend.Ecommerce.repository;


import com.backend.Ecommerce.modal.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RatingRepository extends JpaRepository<Rating, Long> {
	
	public List<Rating> findByProduct_Id(@Param("productId") Long productId);

}
