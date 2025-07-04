package com.backend.Ecommerce.controller;

import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;
	@GetMapping("/profile")
	public ResponseEntity<User> getUserProfileHandler(@RequestHeader("Authorization") String jwt) throws UserException {
		User user=userService.findUserProfileByJwt(jwt);
		return new ResponseEntity<User>(user,HttpStatus.ACCEPTED);
	}
}
