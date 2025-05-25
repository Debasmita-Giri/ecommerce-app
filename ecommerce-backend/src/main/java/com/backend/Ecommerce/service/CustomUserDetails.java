package com.backend.Ecommerce.service;


import com.backend.Ecommerce.enums.UserRole;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class CustomUserDetails implements UserDetailsService {

	@Autowired
    private UserRepository userRepository;
	@Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("user not found with email " + username);
        }
  return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name())));
    }
}

//    UserRole role = user.getRole();
//        List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(role.name()));
//        Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name()))

