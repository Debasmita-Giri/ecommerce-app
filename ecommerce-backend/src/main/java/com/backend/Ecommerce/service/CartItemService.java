package com.backend.Ecommerce.service;

import com.backend.Ecommerce.exception.CartItemException;
import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.Cart;
import com.backend.Ecommerce.modal.CartItem;
import com.backend.Ecommerce.modal.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id,CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);
	
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
	
}
