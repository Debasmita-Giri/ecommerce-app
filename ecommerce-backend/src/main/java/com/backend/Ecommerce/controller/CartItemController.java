package com.backend.Ecommerce.controller;

import com.backend.Ecommerce.exception.CartItemException;
import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.CartItem;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.response.ApiResponse;
import com.backend.Ecommerce.service.CartItemService;
import com.backend.Ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart_items")
public class CartItemController {

	@Autowired
	private CartItemService cartItemService;

	@Autowired
	private UserService userService;

	@DeleteMapping("/{cartItemId}")
	public ResponseEntity<ApiResponse>deleteCartItemHandler(@PathVariable Long cartItemId, @RequestHeader("Authorization")String jwt) throws CartItemException, UserException{
		User user=userService.findUserProfileByJwt(jwt);
		cartItemService.removeCartItem(user.getId(), cartItemId);
		ApiResponse res=new ApiResponse("Item Remove From Cart",true);
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
	}



	@PutMapping("/{cartItemId}")
	public ResponseEntity<CartItem>updateCartItemHandler(@PathVariable Long cartItemId, @RequestBody CartItem cartItem, @RequestHeader("Authorization")String jwt) throws CartItemException, UserException {
		User user=userService.findUserProfileByJwt(jwt);
			CartItem updatedCartItem =cartItemService.updateCartItem(user.getId(), cartItemId, cartItem);
			return new ResponseEntity<>(updatedCartItem,HttpStatus.ACCEPTED);
	}
}
