package com.Star_Mobile.Star_Mobile.gallery;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/gallery")
public class GalleryControl {

    @Autowired
    private final GalleryService galleryService;
    private final ObjectMapper mapper;
    @PostMapping("/{userId}/items/add")
    public ResponseEntity<String> addItemWithPhotos(
            @PathVariable String userId,
            @RequestParam(value = "Photo", required = true) MultipartFile photo1
    ) throws JsonProcessingException {

        try {
            galleryService.savePhotos(photo1,userId);
            return new ResponseEntity<>("photo saved successfully", HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>("Error saving photo: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/updatePhoto/{itemId}")
    public ResponseEntity<String> updatePhoto(
            @RequestParam(value = "photo") MultipartFile photo,
            @PathVariable String itemId
    ) throws IOException {
        if(galleryService.updatePhoto(photo,itemId)){
            return ResponseEntity.ok("Successfully upgrade.");
        }
        return new ResponseEntity<>("Unsuccessfully to upgrade", HttpStatus.BAD_REQUEST);

    }

    @DeleteMapping("/deleteSliderPhoto/{itemId}")
    public ResponseEntity<String> RemovePhoto(
            @PathVariable String itemId
    ) throws IOException {
        if(galleryService.removePhoto(itemId)){
            return ResponseEntity.ok("Successfully remove.");
        }
        return new ResponseEntity<>("Unsuccessfully to remove", HttpStatus.BAD_REQUEST);

    }

    @GetMapping("/getPhotos")
    public ResponseEntity<List<PhotoResponse>> getPhotos(

    ) throws IOException {
        try{
            List<PhotoResponse> slider =  galleryService.getPhotos();
            return ResponseEntity.ok(slider);
        }catch (Exception e){
            return (ResponseEntity<List<PhotoResponse>>) ResponseEntity.notFound();

        }
    }
}
