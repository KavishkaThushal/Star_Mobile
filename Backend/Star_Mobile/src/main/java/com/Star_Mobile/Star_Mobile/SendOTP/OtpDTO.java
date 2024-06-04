package com.Star_Mobile.Star_Mobile.SendOTP;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OtpDTO {

    private String email;
    private Integer otp;
}
