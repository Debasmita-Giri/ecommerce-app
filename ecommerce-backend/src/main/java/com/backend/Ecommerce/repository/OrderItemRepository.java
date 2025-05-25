package com.backend.Ecommerce.repository;


import com.backend.Ecommerce.modal.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
