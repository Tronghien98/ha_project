package com.example.ha_project_be.controller;

import com.example.ha_project_be.entity.Category;
import com.example.ha_project_be.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/cats")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("")
    public ResponseEntity<?> getListCategory() {
        List<Category> categories = categoryService.getListCategories();

        return ResponseEntity.ok(categories);
    }

    @GetMapping("/search")
    public List<Category> searchCategoriesByName(@RequestParam String catName){
        return categoryService.findByCatName(catName);
    }



}
