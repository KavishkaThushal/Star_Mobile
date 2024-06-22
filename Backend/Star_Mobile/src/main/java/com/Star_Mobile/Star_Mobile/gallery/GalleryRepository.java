package com.Star_Mobile.Star_Mobile.gallery;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface GalleryRepository extends MongoRepository<GalleryDTO,String> {

    Optional<GalleryDTO> findById(String id);
}
