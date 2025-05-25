package com.backend.Ecommerce.controller;

import com.backend.Ecommerce.modal.Product;
import com.backend.Ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/home")
public class homepageController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> findProductByCategoryHandler(@RequestParam(required=false) String category){


        List<Product> res= productService.getHomeProduct(category);


        return new ResponseEntity<>(res, HttpStatus.ACCEPTED);

    }
}
