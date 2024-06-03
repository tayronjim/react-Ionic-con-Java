package com.ionictest.test.controllers;

import com.ionictest.test.entities.Customer;
import com.ionictest.test.services.CustomerServices;
import com.ionictest.test.services.ICustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    private ICustomerServices services;
    @GetMapping("/api/customers")
    public List<Customer> getAll(){
        return services.getAll();
    }

    @GetMapping("/api/customer/{id}")
    public Customer getById(@PathVariable String id){
        return services.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/removecustomer/{id}")
    public void remove(@PathVariable String id){
        services.remove(Long.parseLong(id));
    }

    @PostMapping("/api/savecustomer")
    public void save(@RequestBody Customer customer){
        services.save(customer);
    }
}
