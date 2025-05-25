package com.backend.Ecommerce.service;


import com.backend.Ecommerce.exception.UserException;
import com.backend.Ecommerce.modal.User;

public interface UserService {

	public User findUserById(Long userId) throws UserException;

	public User findUserProfileByJwt(String jwt) throws UserException;

	Long findUserIdByJwt(String jwt) throws UserException;
}
