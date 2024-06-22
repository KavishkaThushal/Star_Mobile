package com.Star_Mobile.Star_Mobile.Items;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Bundle {
    private String storageCapacity;
    private String ramCapacity;
    private String price;
}
