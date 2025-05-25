package com.backend.Ecommerce.repository;


import com.backend.Ecommerce.modal.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
