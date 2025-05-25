package com.backend.Ecommerce.controller;


import com.backend.Ecommerce.exception.ProductException;
import com.backend.Ecommerce.modal.Product;
import com.backend.Ecommerce.request.CreateProductRequest;
import com.backend.Ecommerce.response.ApiResponse;
import com.backend.Ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
public class AdminProductController {

    @Autowired
	private ProductService productService;

	@PostMapping("/")
	public ResponseEntity<Product> createProductHandler(@RequestBody CreateProductRequest req) throws ProductException {
		Product createdProduct = productService.createProduct(req);
		return new ResponseEntity<Product>(createdProduct,HttpStatus.ACCEPTED);
	}

	@PostMapping("/creates")
	public ResponseEntity<ApiResponse> createMultipleProduct(@RequestBody CreateProductRequest[] reqs) throws ProductException{

		for(CreateProductRequest product:reqs) {
			productService.createProduct(product);
		}
		ApiResponse res=new ApiResponse("products created successfully",true);
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);
	}

	@DeleteMapping("/{productId}/delete")
	public ResponseEntity<ApiResponse> deleteProductHandler(@PathVariable Long productId) throws ProductException{
		String msg=productService.deleteProduct(productId);
		ApiResponse res=new ApiResponse(msg,true);
		return new ResponseEntity<ApiResponse>(res,HttpStatus.ACCEPTED);

	}

	@GetMapping("/all")
	public ResponseEntity<List<Product>> findAllProduct(){
		List<Product> products = productService.getAllProducts();
		return new ResponseEntity<List<Product>>(products,HttpStatus.OK);
	}

	@PutMapping("/{productId}/update")
	public ResponseEntity<Product> updateProductHandler(@RequestBody Product req,@PathVariable Long productId) throws ProductException{
		Product updatedProduct=productService.updateProduct(productId, req);

		return new ResponseEntity<Product>(updatedProduct,HttpStatus.OK);
	}



}
