package com.Star_Mobile.Star_Mobile.gallery;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.Star_Mobile.Star_Mobile.gallery.PhotoResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class GalleryService {
    private final GalleryRepository galleryRepository;
    public void savePhotos(MultipartFile photo, String userId) {

        try {
            GalleryDTO gPhoto = new GalleryDTO();
            gPhoto.setName(photo.getOriginalFilename());
            gPhoto.setData(photo.getBytes());
            gPhoto.setPhotoType(photo.getContentType());
            gPhoto.setUserId(userId);

            galleryRepository.save(gPhoto);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public boolean removePhoto(String itemId) {
        try {

            galleryRepository.deleteById(itemId);
            return true;

        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }

    public boolean updatePhoto(MultipartFile photo, String id){
        try {
            Optional<GalleryDTO> gPhoto = galleryRepository.findById(id);
            if(gPhoto.isPresent()){
                gPhoto.get().setName(photo.getOriginalFilename());
                gPhoto.get().setData(photo.getBytes());
                gPhoto.get().setPhotoType(photo.getContentType());
               galleryRepository.save(gPhoto.get());
                return true;
            }

        }catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }
    public List<PhotoResponse> getPhotos() {
        List<GalleryDTO> Photo = galleryRepository.findAll();
        List<PhotoResponse> response = new ArrayList<>();
        for(GalleryDTO gPhoto : Photo){
            PhotoResponse PhotoResponses = PhotoResponse.builder()
                    .data(gPhoto .getData())
                    .name(gPhoto.getName())
                    .id(gPhoto .getId())
                    .photoType(gPhoto.getPhotoType())
                    .build();
            response.add(PhotoResponses);
        }
        return response;
    }
}
