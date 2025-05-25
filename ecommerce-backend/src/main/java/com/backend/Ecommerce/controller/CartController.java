package com.backend.Ecommerce.controller;

import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.Cart;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.request.AddItemRequest;
import com.backend.Ecommerce.response.ApiResponse;
import com.backend.Ecommerce.service.CartService;
import com.backend.Ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
	private CartService cartService;
    @Autowired
	private UserService userService;

//	find user's cart
	@GetMapping("/")
	public ResponseEntity<Cart> findUserCartHandler(@RequestHeader("Authorization") String jwt) throws UserException{
		Long userId = userService.findUserIdByJwt(jwt);
		Cart cart=cartService.findUserCart(userId);
		return new ResponseEntity<Cart>(cart,HttpStatus.OK);
	}

	@PutMapping("/add")
	public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req, @RequestHeader("Authorization") String jwt) throws UserException, ProductException {
		User user=userService.findUserProfileByJwt(jwt);
		cartService.addCartItem(user.getId(), req);
		ApiResponse res= new ApiResponse("Item Added To Cart Successfully",true);
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
	}
	@DeleteMapping("/empty")
	public ResponseEntity<String> emptyCart(@RequestHeader("Authorization") String jwt) throws UserException {
		User user=userService.findUserProfileByJwt(jwt);
		Cart cart=cartService.findUserCart(user.getId());
		cartService.emptyCart(cart);
		return ResponseEntity.ok("Cart emptied successfully");
	}


}
