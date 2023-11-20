package com.example.ha_project_be.service;

import com.example.ha_project_be.entity.Category;
import com.example.ha_project_be.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface CategoryService {



    List<Category> getListCategories();

}
