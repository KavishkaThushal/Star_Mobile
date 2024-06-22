package com.Star_Mobile.Star_Mobile.User;


import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;


public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUserName(String userName);
    Optional<User> findByRole(Role role);

}
