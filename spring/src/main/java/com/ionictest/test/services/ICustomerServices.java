package com.ionictest.test.services;

import com.ionictest.test.entities.Customer;

import java.util.List;

public interface ICustomerServices {
    List<Customer> getAll();

    Customer getById(Long id);

    void remove(Long id);

    void save(Customer customer);
}
