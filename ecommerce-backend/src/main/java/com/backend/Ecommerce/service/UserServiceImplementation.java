package com.backend.Ecommerce.service;


import com.backend.Ecommerce.config.JwtTokenProvider;
import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User> user=userRepository.findById(userId);
		if(user.isPresent()){
			return user.get();
		}
		throw new UserException("user not found with id "+userId);
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		String email=jwtTokenProvider.getEmailFromJwtToken(jwt);
		User user=userRepository.findByEmail(email);
		if(user==null) {
			throw new UserException("user not exist with email "+email);
		}
		return user;
	}


	@Override
	public Long findUserIdByJwt(String jwt) throws UserException {
		String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
		Long userId = userRepository.findUserIdByEmail(email);
		if (userId == null) {
			throw new UserException("User not exist with email " + email);
		}
		return userId;
	}

}
