package com.Star_Mobile.Star_Mobile.Items;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ItemsRepository extends MongoRepository<Items,String> {
    Optional<Items> findById(String id);
}
