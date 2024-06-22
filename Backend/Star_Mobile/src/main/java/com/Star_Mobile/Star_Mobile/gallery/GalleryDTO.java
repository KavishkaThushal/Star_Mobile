package com.Star_Mobile.Star_Mobile.gallery;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "Gallery")
public class GalleryDTO {
    @Id
    private String id;
    private String userId;
    private String name;
    private String photoType;

    private byte[] data;
}
