package com.Star_Mobile.Star_Mobile.Items;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class PhotoDetail {

    private String id;
    private String photoName;
    private String photoType;
    private byte[] photoData;
}
