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
    private String brand;
    private String category;
    private String version;
    private boolean availability;
    private String shortDesc;
    private String specification;
    private List<PhotoDetail> photoDetails = new ArrayList<>();
    private  List<Bundle> bundles = new ArrayList<>();
}
