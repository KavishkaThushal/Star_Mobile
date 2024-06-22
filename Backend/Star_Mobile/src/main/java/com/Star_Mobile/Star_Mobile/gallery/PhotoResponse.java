package com.Star_Mobile.Star_Mobile.gallery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PhotoResponse {
    private String id;
    private String name;
    private String photoType;
    private byte[] data;
}
