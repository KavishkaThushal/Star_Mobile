package com.Star_Mobile.Star_Mobile;

import com.Star_Mobile.Star_Mobile.User.Role;
import com.Star_Mobile.Star_Mobile.User.User;
import com.Star_Mobile.Star_Mobile.User.UserRepository;
import com.Star_Mobile.Star_Mobile.auth.AuthenticationService;
import com.Star_Mobile.Star_Mobile.auth.RegisterRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.yaml.snakeyaml.comments.CommentLine;
import org.yaml.snakeyaml.comments.CommentType;
import org.yaml.snakeyaml.error.Mark;
import org.yaml.snakeyaml.events.CommentEvent;

import java.util.Optional;

@SpringBootApplication
public class StarMobileApplication implements CommandLineRunner {

private final AuthenticationService authenticationService;
private final UserRepository userRepository;

    public StarMobileApplication(AuthenticationService authenticationService, UserRepository userRepository) {
        this.authenticationService = authenticationService;
        this.userRepository = userRepository;
    }

    public static void main(String[] args) {

		SpringApplication.run(StarMobileApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Optional<User> user = userRepository.findByRole(Role.ADMIN);
		if(user.isEmpty()){
			RegisterRequest request = RegisterRequest.builder()
					.email("admin@gamil.com")
					.fullName("Admin")
					.password("admin1234")
					.build();
			authenticationService.registerAdmin(request);
		}
	}
}
