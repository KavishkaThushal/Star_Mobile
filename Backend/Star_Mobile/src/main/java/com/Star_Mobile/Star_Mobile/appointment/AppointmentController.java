package com.Star_Mobile.Star_Mobile.appointment;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/appointment")
@RequiredArgsConstructor
public class AppointmentController {
    @Autowired
    private final AppointmentService appointmentService;
    
    @PostMapping("/addAppointment")
    public ResponseEntity<String> addAppointment(@RequestBody AppointmentRequest appointmentRequest){
        if(appointmentService.addAppointment(appointmentRequest)){
            return ResponseEntity.ok("Successful");
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unsuccessful");
        }
    }

    @GetMapping("/getUserAppointments/{user_name}")
    public ResponseEntity<List<AppointmentResponse>> getUserAppointment(@PathVariable String user_name){
        List<AppointmentResponse> appointmentResponses = appointmentService.getAppointment(user_name.toLowerCase().trim().toString());
        if(appointmentResponses.isEmpty()){
            return (ResponseEntity<List<AppointmentResponse>>) ResponseEntity.status(HttpStatus.NOT_FOUND);
        }else{
            return ResponseEntity.ok(appointmentResponses);
        }

    }

    @DeleteMapping("/cancel/appointment/{id}")
    public ResponseEntity<?> removeApplication(
            @PathVariable String id
    ) {

        try {
            if (appointmentService.removeAppointment(id)) {
                return ResponseEntity.ok("Successful");
            } else {
                return ResponseEntity.badRequest().body("Unsuccessful");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Unsuccessful");
        }
    }

    @PutMapping("/addFeedback/{id}")
    public  ResponseEntity<?> addFeedback(@PathVariable String id,@RequestBody String feedback){

        try{
            if(appointmentService.addFeedback(id,feedback)){
                return ResponseEntity.ok("Added");
            }

        }catch (Exception e){
            return ResponseEntity.badRequest().body("unsuccessful");
        }

        return ResponseEntity.badRequest().body("unsuccessful");
    }






}
