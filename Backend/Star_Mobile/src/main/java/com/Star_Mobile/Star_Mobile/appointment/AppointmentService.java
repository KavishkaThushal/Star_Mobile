package com.Star_Mobile.Star_Mobile.appointment;

import com.Star_Mobile.Star_Mobile.User.User;
import com.Star_Mobile.Star_Mobile.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final UserRepository userRepository;
    private final AppointmentRepository appointmentRepository;
    public boolean addAppointment(AppointmentRequest appointmentRequest){
        Optional<User> user = userRepository.findByUserName(appointmentRequest.getUserName().trim().toLowerCase());
        if(user.isPresent()){
            Appointment appointment = Appointment.builder()
                    .date(appointmentRequest.getDate())
                    .email(appointmentRequest.getEmail())
                    .firstName(appointmentRequest.getFirstName())
                    .phone(appointmentRequest.getPhone())
                    .issue(appointmentRequest.getIssue())
                    .lastName(appointmentRequest.getLastName())
                    .newJob(true)
                    .jobStatus(false)
                    .build();

            appointment = appointmentRepository.save(appointment);
            user.get().getAppointments().add(appointment);
            userRepository.save(user.get());
            return true;
        }
        return false;
    }

    public List<AppointmentResponse> getAppointment(String user_name) {
        Optional<User> userOptional = userRepository.findByUserName(user_name.trim().toLowerCase());
        if (userOptional.isPresent()) {
            List<Appointment> appointments = userOptional.get().getAppointments();
            List<AppointmentResponse> appointmentResponses = new ArrayList<>();

            for (Appointment appointment : appointments) {
                System.out.println(appointment.getFirstName());
                AppointmentResponse appointmentResponse = new AppointmentResponse();
                appointmentResponse.setDate(appointment.getDate());
                appointmentResponse.setId(appointment.getId());
                appointmentResponse.setNewJob(appointment.isNewJob());
                appointmentResponse.setPhone(appointment.getPhone());
                appointmentResponse.setLastName(appointment.getLastName());
                appointmentResponse.setEmail(appointment.getEmail());
                appointmentResponse.setFirstName(appointment.getFirstName());
                appointmentResponse.setIssue(appointment.getIssue());

                appointmentResponses.add(appointmentResponse);
            }

            return appointmentResponses;
        }

        return Collections.emptyList();
    }

    public boolean removeAppointment(String id){
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if(appointment.isPresent()){
            appointmentRepository.delete(appointment.get());
            return true;
        }else{
            return false;
        }
    }

    public boolean addFeedback(String id, String feedback){
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if(appointment.isPresent() && appointment.get().isJobStatus() && !appointment.get().isNewJob()){
            appointment.get().setFeedback(feedback);
            appointmentRepository.save(appointment.get());
            return true;
        }return false;
    }
}
