package com.Star_Mobile.Star_Mobile.SendOTP;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "Send_OTP")
public class OTP {
    @Id
    private String id;
    private Integer otpCode;
    private String email;

    private LocalDateTime otpExpiryTime;
}
