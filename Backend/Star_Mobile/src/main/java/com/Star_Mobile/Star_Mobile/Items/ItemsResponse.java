package com.Star_Mobile.Star_Mobile.Items;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ItemsResponse {
    private String id;
    private String title;
    private Integer availableAmount;
    private String brand;
    private String category;
    private boolean availability;
    private String shortDesc;
    private  Features features;
    private List<PhotoDetail> photoDetails = new ArrayList<>();

}
