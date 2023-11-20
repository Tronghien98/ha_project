package com.example.ha_project_be.service;

import com.example.ha_project_be.entity.Category;

import com.example.ha_project_be.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;


@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryRepository categoryRepository;


    @Override
    public List<Category> getListCategories() {
        return (List<Category>) categoryRepository.findAll();
    }
}

