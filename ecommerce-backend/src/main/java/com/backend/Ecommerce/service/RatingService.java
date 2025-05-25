package com.backend.Ecommerce.service;

import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.modal.Rating;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.request.RatingRequest;

import java.util.List;

public interface RatingService {
	
	public Rating createRating(RatingRequest req, Long userId) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
