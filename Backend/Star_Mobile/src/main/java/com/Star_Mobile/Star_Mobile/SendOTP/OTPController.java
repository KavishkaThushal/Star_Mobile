package com.Star_Mobile.Star_Mobile.SendOTP;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/otp")
@RequiredArgsConstructor
public class OTPController {
    private final OTPService service;
    @PostMapping("/sendOTP")
    public ResponseEntity<String> sendOTP(
            @RequestBody OtpDTO email
    ) {
        try {
            System.out.println(email);
            service.sendOTP(email.getEmail().trim().toLowerCase());
            return ResponseEntity.ok("OTP sent successful.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("User with provided email doesn't exist");
        }

    }

    @PostMapping("/reSendOTP")
    public ResponseEntity<String> reSendOTP(
            @RequestBody OtpDTO email
    ) {
        try {
            String message = service.reSendOTP(email.getEmail().trim().toLowerCase());
            return ResponseEntity.ok(message);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("User with provided email doesn't exist.");
        }

    }

    @PostMapping("/verifyOTP")
    public ResponseEntity<String> verifyOTP(
            @RequestBody OtpDTO otpDTO
    ) {
        try {
            String status = service.verifyOTP(otpDTO.getEmail().trim().toLowerCase(), otpDTO.getOtp());
            if (Objects.equals(status, "OTP verification successful.")) {
                return ResponseEntity.ok(status);
            } else if (Objects.equals(status, "OTP is expired")) {
                return ResponseEntity.badRequest().body("OTP is expired");
            } else if (Objects.equals(status, "Invalid OTP")) {
                return ResponseEntity.badRequest().body("Invalid OTP");
            } else if (Objects.equals(status, "Email does not exit")) {
                return ResponseEntity.badRequest().body("Email does not exit");
            }else{
                return ResponseEntity.badRequest().body("verification unsuccessful");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
