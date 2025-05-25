package com.backend.Ecommerce.service;


import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.modal.Cart;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);

	void emptyCart(Cart cart);

	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
