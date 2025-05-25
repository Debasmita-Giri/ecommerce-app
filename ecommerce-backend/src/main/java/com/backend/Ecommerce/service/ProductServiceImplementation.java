package com.backend.Ecommerce.service;



import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.modal.Category;
import com.backend.Ecommerce.modal.Product;
import com.backend.Ecommerce.repository.CategoryRepository;
import com.backend.Ecommerce.repository.ProductRepository;
import com.backend.Ecommerce.request.CreateProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductServiceImplementation implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private UserService userService;

	@Autowired
	private CategoryRepository categoryRepository;
	


	@Override
	public Product createProduct(CreateProductRequest req) {
		Category topLevel=categoryRepository.findByName(req.getTopLavelCategory());
		if(topLevel==null) {
			
			Category topLavelCategory=new Category();
			topLavelCategory.setName(req.getTopLavelCategory());
			topLavelCategory.setLevel(1);
			
			topLevel= categoryRepository.save(topLavelCategory);
		}
		
		Category secondLevel=categoryRepository.findByNameAndParant(req.getSecondLavelCategory(),topLevel.getName());
		if(secondLevel==null) {
			Category secondLavelCategory=new Category();
			secondLavelCategory.setName(req.getSecondLavelCategory());
			secondLavelCategory.setParentCategory(topLevel);
			secondLavelCategory.setLevel(2);
			
			secondLevel= categoryRepository.save(secondLavelCategory);
		}

		Category thirdLevel=categoryRepository.findByNameAndParant(req.getThirdLavelCategory(),secondLevel.getName());
		if(thirdLevel==null) {
			Category thirdLavelCategory=new Category();
			thirdLavelCategory.setName(req.getThirdLavelCategory());
			thirdLavelCategory.setParentCategory(secondLevel);
			thirdLavelCategory.setLevel(3);
			
			thirdLevel=categoryRepository.save(thirdLavelCategory);
		}

		Product product=new Product();
		product.setTitle(req.getTitle());
		product.setColor(req.getColor());
		product.setDescription(req.getDescription());
		product.setDiscountedPrice(req.getDiscountedPrice());
		product.setDiscountPersent(req.getDiscountPersent());
		product.setImageUrl(req.getImageUrl());
		product.setBrand(req.getBrand());
		product.setPrice(req.getPrice());
		product.setSizes(req.getSize());
		product.setQuantity(req.getQuantity());
		product.setCategory(thirdLevel);
		product.setCreatedAt(LocalDateTime.now());
        return productRepository.save(product);
	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {
		Product product=findProductById(productId);
		productRepository.delete(product);
		return "Product deleted Successfully";
	}

	@Override
	public Product updateProduct(Long productId,Product req) throws ProductException {
		Product product=findProductById(productId);
		if(req.getQuantity()!=0) {
			product.setQuantity(req.getQuantity());
		}
		if(req.getDescription()!=null) {
			product.setDescription(req.getDescription());
		}
		return productRepository.save(product);
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		Optional<Product> opt=productRepository.findById(id);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new ProductException("product not found with id "+id);
	}
	@Override
	public List<Product> findProductByCategory(String category) {
		return productRepository.findByCategory(category);
	}
	@Override
	public List<Product> searchProduct(String query) {
        return productRepository.searchProduct(query);
	}
	@Override
	public Page<Product> getAllProduct(
			String category,
			List<String> color,
			List<String> sizes,
			Integer minPrice,
			Integer maxPrice,
			Integer minDiscount,
			String sort,
			String stock,
			Integer pageNumber,
			Integer pageSize) {

		// Create a Pageable object for pagination
		Pageable pageable = PageRequest.of(pageNumber, pageSize);

		// Build a Specification for dynamic query construction
		Specification<Product> spec = Specification.where(null);

		// Add category filter if provided
		if (category != null && !category.isEmpty()) {
			spec = spec.and((root, query, criteriaBuilder) ->
					criteriaBuilder.equal(root.get("category").get("name"), category));
		}

		// Add price range filter if provided
		if (minPrice != null && maxPrice != null) {
			spec = spec.and((root, query, criteriaBuilder) ->
					criteriaBuilder.between(root.get("discountedPrice"), minPrice, maxPrice));
		}

		// Add min discount filter if provided
		if (minDiscount != null) {
			spec = spec.and((root, query, criteriaBuilder) ->
					criteriaBuilder.greaterThanOrEqualTo(root.get("discountPersent"), minDiscount));
		}
		System.out.println(color==null);
		// Add color filter if provided

		if (color != null && !color.isEmpty()) {
			spec = spec.and((root, query, criteriaBuilder) ->
					root.get("color").in(color));
		}

		// Add stock filter if provided
		if (stock != null) {
			if (stock.equals("in_stock")) {
				spec = spec.and((root, query, criteriaBuilder) ->
						criteriaBuilder.greaterThan(root.get("quantity"), 0));
			} else if (stock.equals("out_of_stock")) {
				spec = spec.and((root, query, criteriaBuilder) ->
						criteriaBuilder.equal(root.get("quantity"), 0));
			}
		}

		// Apply sorting based on the 'sort' parameter
		if ("price_low".equals(sort)) {
			pageable = PageRequest.of(pageNumber, pageSize, Sort.by(Sort.Direction.ASC, "discountedPrice"));
		} else if ("price_high".equals(sort)) {
			pageable = PageRequest.of(pageNumber, pageSize, Sort.by(Sort.Direction.DESC, "discountedPrice"));
		}

		// Use the Specification to retrieve the filtered products with pagination
        return productRepository.findAll(spec, pageable);
	}

	@Override
	public List<Product> getHomeProduct(String category) {
		return productRepository.homeProducts(category,PageRequest.of(0, 10));
	}

}








