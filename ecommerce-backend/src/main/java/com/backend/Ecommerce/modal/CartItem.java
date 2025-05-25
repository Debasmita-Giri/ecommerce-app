package com.backend.Ecommerce.modal;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Objects;

@Data
@Entity
public class CartItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@JsonIgnore
	@ManyToOne
	private Cart cart;

	@ManyToOne
	private Product product;

	private String size;

	private int quantity;

	private Integer price;

	private Integer discountedPrice;

	private Long userId;

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		CartItem cartItem = (CartItem) o;
		return Objects.equals(id, cartItem.id);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}
}
