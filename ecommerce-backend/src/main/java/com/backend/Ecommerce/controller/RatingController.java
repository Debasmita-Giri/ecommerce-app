package com.backend.Ecommerce.controller;

import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.Rating;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.request.RatingRequest;
import com.backend.Ecommerce.service.RatingService;
import com.backend.Ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

	@Autowired
	private UserService userService;
	@Autowired
	private RatingService ratingServices;

	@PostMapping("/create")
	public ResponseEntity<Rating> createRatingHandler(@RequestBody RatingRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
		Long userId = userService.findUserIdByJwt(jwt);
		Rating rating=ratingServices.createRating(req, userId);
		return new ResponseEntity<>(rating,HttpStatus.ACCEPTED);
	}

	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Rating>> getProductsReviewHandler(@PathVariable Long productId){
		List<Rating> ratings=ratingServices.getProductsRating(productId);
		return new ResponseEntity<>(ratings,HttpStatus.OK);
	}


}
