package com.Star_Mobile.Star_Mobile.config;

import com.Star_Mobile.Star_Mobile.User.Role;
import jakarta.servlet.Filter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .authorizeHttpRequests()

                .requestMatchers("api/v1/auth/**")
                .permitAll()
                .requestMatchers("/api/v1/appointment/**")
                .hasAuthority(String.valueOf(Role.USER))
                .requestMatchers("/api/v1/admin/**")
                .hasAuthority(String.valueOf(Role.ADMIN))
                .requestMatchers("/api/v1/otp/**")
                .permitAll()
                .requestMatchers("/api/v1/gallery/**")
                .permitAll()
                .requestMatchers("api/v1/items/**")
                .hasAuthority(String.valueOf(Role.ADMIN))
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
