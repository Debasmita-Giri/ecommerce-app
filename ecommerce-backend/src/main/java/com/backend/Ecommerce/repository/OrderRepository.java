package com.backend.Ecommerce.repository;


import com.backend.Ecommerce.modal.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

	@Query("SELECT o FROM Order o WHERE o.user.id = :userId AND (o.orderStatus = PENDING OR o.orderStatus = CONFIRMED OR o.orderStatus = SHIPPED OR o.orderStatus = DELIVERED OR o.orderStatus = OUTFORDELIVERY OR o.orderStatus = CANCELLED)")
	public List<Order> getUsersOrders(@Param("userId") Long userId);
}
