package com.Star_Mobile.Star_Mobile.admin;

import com.Star_Mobile.Star_Mobile.appointment.AppointmentResponse;
import com.Star_Mobile.Star_Mobile.appointment.AppointmentService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/v1/admin")
@RestController
@RequiredArgsConstructor
public class AdminController {
    private final AppointmentService appointmentService;
    @GetMapping("/getUserAppointments")
    public ResponseEntity<List<AppointmentResponse>> getAppointments(){
        try{
            List<AppointmentResponse> appointmentResponses = appointmentService.getAppointments();
            if(appointmentResponses.isEmpty()){
                return ResponseEntity.notFound().build();
            }else{
                return ResponseEntity.ok(appointmentResponses);
            }
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }

    }
    @PutMapping("/updateStatus/appointment/{id}")
    public ResponseEntity<?> updateAppointStatus(@PathVariable String id,
                                                 @RequestBody AppointmentStatusUpgrade status
    ){
        try{
           if(appointmentService.updateStatus(id,status)){
                return ResponseEntity.ok().build();
           }else{
               return ResponseEntity.notFound().build();
           }

        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }
}
