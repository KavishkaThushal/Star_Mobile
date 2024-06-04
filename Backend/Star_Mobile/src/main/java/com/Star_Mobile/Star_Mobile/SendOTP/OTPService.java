package com.Star_Mobile.Star_Mobile.SendOTP;


import com.Star_Mobile.Star_Mobile.User.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;
@Service
@CrossOrigin
@RequiredArgsConstructor
public class OTPService {
    @Autowired
    private final OTPRepository otpRepository;
    private final JavaMailSender emailSender;

    //Email works and OTP generate...
    public void sendOTPEmail(String toEmail, Integer otp) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(toEmail);
            message.setSubject("OTP Verification");
            message.setText("Your OTP for verification is: " + otp + ". This will expire within TWO minutes.");
            emailSender.send(message);
        } catch (MailException e) {
            // Handle exceptions (e.g., log or perform appropriate actions)
            e.printStackTrace();
        }
    }
    public void sendOTP(String email)  {

        Optional<OTP> userOTP = otpRepository.findByEmail(email);

        if(userOTP.isPresent()){
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime expiryTime = now.plusMinutes(2);
            Integer newOTP = generateOTP();
            OTP otp = userOTP.get();
            otp.setOtpCode(newOTP);
            otp.setOtpExpiryTime(expiryTime);
            otpRepository.save(otp);
            sendOTPEmail(email, newOTP);
        }else{
            // Generate a new OTP
            Integer OTP = generateOTP();
            // Save the new OTP for the user
            saveOTP(email, OTP);
            // Send the new OTP to the user's email
            sendOTPEmail(email, OTP);
        }

    }
    public String reSendOTP (String email){
        Integer newOTP = generateOTP();

        Optional<OTP> userOTP = otpRepository.findByEmail(email);
        if(userOTP.isPresent()){
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime expiryTime = now.plusMinutes(2);
            OTP otp = userOTP.get();
            otp.setOtpCode(newOTP);
            otp.setOtpExpiryTime(expiryTime);
            otpRepository.save(otp);
            sendOTPEmail(email, newOTP);
            return "new OTP sent.";
        }else{
            return null;
        }
    }
    public void saveOTP(String email, Integer otpCode) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expiryTime = now.plusMinutes(2); // Set OTP expiry to 2 minutes from now

        OTP otp = OTP.builder()
                .otpCode(otpCode)
                .email(email)
                .otpExpiryTime(expiryTime)
                .build();

        otpRepository.save(otp); // Save OTP on the database

    }

    // Generate OTP method
    public Integer generateOTP() {
        User user = new User();
        String numbers = "0123456789";
        Random random = new SecureRandom();
        StringBuilder otp = new StringBuilder();

        for (int i = 0; i < 6; i++) {
            otp.append(numbers.charAt(random.nextInt(numbers.length())));
        }
        return Integer.valueOf(otp.toString());
    }

    public String verifyOTP(String email, Integer otp) {
        Optional<OTP> userOTP= otpRepository.findByEmail(email);

        if(userOTP.isPresent()){

            if (userOTP.get().getOtpCode() != null && userOTP.get().getOtpCode().equals(otp)) {
                LocalDateTime now = LocalDateTime.now();
                LocalDateTime expiryTime = userOTP.get().getOtpExpiryTime();

                // Check if OTP has expired
                if (now.isBefore(expiryTime)) {
                    // OTP is valid and not expired
                    return "OTP verification successful.";
                } else {
                    // OTP is expired
                    return "OTP is expired";
                }
            }else{return "Invalid OTP";}
        }
        else{return "Email does not exit.";}
    }

}
