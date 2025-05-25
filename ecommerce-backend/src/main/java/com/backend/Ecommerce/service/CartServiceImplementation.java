package com.backend.Ecommerce.service;

import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.modal.Cart;
import com.backend.Ecommerce.modal.CartItem;
import com.backend.Ecommerce.modal.Product;
import com.backend.Ecommerce.modal.User;
import com.backend.Ecommerce.repository.CartRepository;
import com.backend.Ecommerce.request.AddItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CartServiceImplementation implements CartService{

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private CartItemService cartItemService;

	@Autowired
	private ProductService productService;

	@Override
	public Cart createCart(User user) {
		
		Cart cart = new Cart();
		cart.setUser(user);
        return cartRepository.save(cart);
	}

	public Cart findUserCart(Long userId) {
		Cart cart =	cartRepository.findByUserId(userId);
		List<CartItem> sortedCartItems = cart.getCartItems()
				.stream()
				.sorted(Comparator.comparing(CartItem::getId))
				.toList();
		int totalPrice = sortedCartItems.stream().mapToInt(CartItem::getPrice).sum();
		int totalDiscountedPrice = sortedCartItems.stream().mapToInt(CartItem::getDiscountedPrice).sum();
		int totalItem = sortedCartItems.stream().mapToInt(CartItem::getQuantity).sum();


		cart.setTotalPrice(totalPrice);
//		cart.setTotalItem(cart.getCartItems().size());
		cart.setTotalDiscountedPrice(totalDiscountedPrice);
		cart.setDiscounte(totalPrice-totalDiscountedPrice);
		cart.setTotalItem(totalItem);
		cartRepository.save(cart);
		return cart;

	}

	@Override
	public void emptyCart(Cart cart) {

		if (cart != null) {
			cart.getCartItems().clear();
			cartRepository.save(cart);
		}
	}

	@Override
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
		Cart cart=cartRepository.findByUserId(userId);
		Product product=productService.findProductById(req.getProductId());
		
		CartItem isPresent=cartItemService.isCartItemExist(cart, product, req.getSize(),userId);
		
		if(isPresent == null) {
			CartItem cartItem = new CartItem();
			cartItem.setProduct(product);
			cartItem.setCart(cart);
			cartItem.setQuantity(req.getQuantity());
			cartItem.setUserId(userId);
			
			
			int price=req.getQuantity()*product.getDiscountedPrice();
			cartItem.setPrice(price);
			cartItem.setSize(req.getSize());
			
			CartItem createdCartItem=cartItemService.createCartItem(cartItem);
			cart.getCartItems().add(createdCartItem);
		}
		
		
		return "Item Add To Cart";
	}

}
