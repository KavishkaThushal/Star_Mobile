package com.Star_Mobile.Star_Mobile.Items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemRequest {
    private String brand;
    private List<String> PhotoId;
    private String category;
    private String version;
    private boolean availability;
    private double price;
    private String shortDesc;
    private String specification;
    private  List<Bundle> bundles;
}
