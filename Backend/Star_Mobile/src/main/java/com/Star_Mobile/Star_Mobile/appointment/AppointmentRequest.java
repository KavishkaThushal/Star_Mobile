package com.Star_Mobile.Star_Mobile.appointment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentRequest {
    private String firstName;
    private String lastName;
    private String userName;
    private String email;
    private String phone;
    private String issue;
    private Date date;
}
