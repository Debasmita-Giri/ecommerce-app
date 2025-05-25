package com.backend.Ecommerce.service;


import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.modal.Product;
import com.backend.Ecommerce.modal.Rating;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.repository.RatingRepository;
import com.backend.Ecommerce.request.RatingRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RatingServiceImplementation implements RatingService {

	@Autowired
	private RatingRepository ratingRepository;

	@Autowired
	private ProductService productService;

	@Override
	public Rating createRating(RatingRequest req, Long userId) throws ProductException {
		Rating rating=new Rating();
		Product existingProduct =new Product();
		existingProduct.setId(req.getProductId());
		rating.setProduct(existingProduct);
		User existingUser=new User();
		existingUser.setId(userId);
		rating.setUser(existingUser);
		rating.setRating(req.getRating());
        rating.setTitle(req.getReview().get("title"));
		rating.setDescription(req.getReview().get("description"));
		rating.setCreatedAt(LocalDateTime.now());
		return ratingRepository.save(rating);
	}

	@Override
	public List<Rating> getProductsRating(Long productId) {
		// TODO Auto-generated method stub
		return ratingRepository.findByProduct_Id(productId);
	}


}
