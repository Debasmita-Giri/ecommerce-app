package com.backend.Ecommerce.controller;

import com.backend.Ecommerce.exception.OrderException;
import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.Address;
import com.backend.Ecommerce.modal.Order;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.service.OrderService;
import com.backend.Ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;
	@Autowired
	private UserService userService;

	@PostMapping("/")
	public ResponseEntity<Order> createOrderHandler(@RequestBody Address shippingAddress,
			@RequestHeader("Authorization")String jwt) throws UserException {

		User user=userService.findUserProfileByJwt(jwt);
		Order order =orderService.createOrder(user, shippingAddress);

		return new ResponseEntity<Order>(order,HttpStatus.OK);

	}

	@GetMapping("/user")
	public ResponseEntity<List<Order>> usersOrderHistoryHandler(@RequestHeader("Authorization")
	String jwt) throws OrderException, UserException{

		User user=userService.findUserProfileByJwt(jwt);
		List<Order> orders=orderService.usersOrderHistory(user.getId());
		return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
	}

	@GetMapping("/{orderId}")
	public ResponseEntity< Order> findOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization")
	String jwt) throws OrderException, UserException{

		User user=userService.findUserProfileByJwt(jwt);
		Order orders=orderService.findOrderById(orderId);
		return new ResponseEntity<>(orders,HttpStatus.ACCEPTED);
	}

}
