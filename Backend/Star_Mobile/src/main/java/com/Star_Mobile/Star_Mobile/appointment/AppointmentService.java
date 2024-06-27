package com.Star_Mobile.Star_Mobile.appointment;

import com.Star_Mobile.Star_Mobile.User.User;
import com.Star_Mobile.Star_Mobile.User.UserRepository;
import com.Star_Mobile.Star_Mobile.admin.AppointmentStatusUpgrade;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AppointmentService {

    private final UserRepository userRepository;
    private final AppointmentRepository appointmentRepository;

    public boolean addAppointment(AppointmentRequest appointmentRequest){
        Optional<User> user = userRepository.findById(appointmentRequest.getId());
        if(user.isPresent()){
            Appointment appointment = Appointment.builder()
                    .date(appointmentRequest.getDate())
                    .email(appointmentRequest.getEmail())
                    .firstName(appointmentRequest.getFirstName())
                    .phone(appointmentRequest.getPhone())
                    .issue(appointmentRequest.getIssue())
                    .lastName(appointmentRequest.getLastName())
                    .jobStatus("New Job")
                    .build();

            appointment = appointmentRepository.save(appointment);
            user.get().getAppointments().add(appointment);
            userRepository.save(user.get());
            return true;
        }
        return false;
    }

    public List<AppointmentResponse> getAppointment(String id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            List<Appointment> appointments = userOptional.get().getAppointments();
            List<AppointmentResponse> appointmentResponses = new ArrayList<>();

            for (Appointment appointment : appointments) {
                System.out.println(appointment.getFirstName());
                AppointmentResponse appointmentResponse = new AppointmentResponse();
                appointmentResponse.setDate(appointment.getDate());
                appointmentResponse.setId(appointment.getId());
                appointmentResponse.setPhone(appointment.getPhone());
                appointmentResponse.setLastName(appointment.getLastName());
                appointmentResponse.setEmail(appointment.getEmail());
                appointmentResponse.setFirstName(appointment.getFirstName());
                appointmentResponse.setJobStatus(appointment.getJobStatus());
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
        if(appointment.isPresent() && Objects.equals(appointment.get().getJobStatus(), "completed".trim().toUpperCase())){
            appointment.get().setFeedback(feedback);
            appointmentRepository.save(appointment.get());
            return true;
        }return false;
    }

    public List<AppointmentResponse> getAppointments() {
        List<Appointment> appointments = appointmentRepository.findAll();
        List<AppointmentResponse> appointmentResponses = new ArrayList<>();

        for (Appointment appointment : appointments) {
            System.out.println(appointment.getFirstName());
            AppointmentResponse appointmentResponse = new AppointmentResponse();
            appointmentResponse.setDate(appointment.getDate());
            appointmentResponse.setId(appointment.getId());
            appointmentResponse.setPhone(appointment.getPhone());
            appointmentResponse.setLastName(appointment.getLastName());
            appointmentResponse.setEmail(appointment.getEmail());
            appointmentResponse.setFirstName(appointment.getFirstName());
            appointmentResponse.setJobStatus(appointment.getJobStatus());
            appointmentResponse.setIssue(appointment.getIssue());

            appointmentResponses.add(appointmentResponse);
        }
        return appointmentResponses;
    }

    public boolean updateStatus(String id, AppointmentStatusUpgrade status) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if(appointment.isPresent() && !Objects.equals(appointment.get().getJobStatus(), "completed".trim().toUpperCase())){
            appointment.get().setJobStatus(status.getStatus());
            appointmentRepository.save(appointment.get());
            return true;
        }
        return false;
    }
}
