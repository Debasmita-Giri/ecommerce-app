package com.backend.Ecommerce.modal;

import jakarta.persistence.Column;

import java.time.LocalDate;

public class PaymentInformation { 

	    @Column(name = "cardholder_name")
	    private String cardholderName;

	    @Column(name = "card_number")
	    private String cardNumber;

	    @Column(name = "expiration_date")
	    private LocalDate expirationDate;

	    @Column(name = "cvv")
	    private String cvv;


	}


