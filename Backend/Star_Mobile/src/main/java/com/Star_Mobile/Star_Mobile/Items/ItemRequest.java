package com.Star_Mobile.Star_Mobile.Items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemRequest {
    private String title;
    private Integer availableAmount;
    private String brand;
    private String category;
    private boolean availability;
    private String shortDesc;
    private  Features features;
}
