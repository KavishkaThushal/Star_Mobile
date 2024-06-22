package com.Star_Mobile.Star_Mobile.Items;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "Products")
public class  Items {

    @Id
    private String id;
    private String title;
    private Integer availableAmount;
    private String brand;
    private String category;
    private boolean availability;
    private String shortDesc;
    @Field("photoDetails")
    private List<PhotoDetail> photoDetails = new ArrayList<>();
    @Field("features")
    private  Features features;
}
