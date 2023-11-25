package com.example.ha_project_be.repository;

import com.example.ha_project_be.entity.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {
    List<Category> findCategoriesByCatNameLike(String catName);
}
