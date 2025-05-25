package com.backend.Ecommerce.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Objects;

@Data
@Entity
public class OrderItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonIgnore
	@ManyToOne
	private Order order;
	
	@ManyToOne
	private Product product;
	
	private String size;
	
	private int quantity;
	
	private Integer price;
	
	private Integer discountedPrice;
	
	private Long userId;
	
	private LocalDateTime deliveryDate;

}
