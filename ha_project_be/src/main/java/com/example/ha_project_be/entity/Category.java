package com.example.ha_project_be.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "ha_category")

public class Category {

    @Id
    @Column(name = "ha_cat_id")
    private int catID;

    @Column(name = "ha_cat_name")

    private String catName;

    @Column(name = "ha_cat_order")
    private int catOrder;
}
