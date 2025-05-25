package com.backend.Ecommerce.request;

import lombok.Getter;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
public class RatingRequest {
	private Long productId;
	private double rating;
	private Map<String,String> review;
}
