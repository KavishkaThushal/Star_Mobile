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
public class AppointmentResponse {
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String issue;
    private Date date;
    private boolean newJob;
    private boolean jobStatus;
}
