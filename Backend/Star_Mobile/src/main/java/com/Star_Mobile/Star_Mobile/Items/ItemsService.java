package com.Star_Mobile.Star_Mobile.Items;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ItemsService {
    private final ItemsRepository itemsRepository;

    public void saveItems(ItemRequest itemRequest, List<MultipartFile> photos) throws IOException {
        List<PhotoDetail> photoDetails = new ArrayList<>();
        for (MultipartFile photo : photos) {
            PhotoDetail photoDetail = new PhotoDetail();
            photoDetail.setId(UUID.randomUUID().toString());
            photoDetail.setPhotoName(photo.getOriginalFilename());
            photoDetail.setPhotoType(photo.getContentType());
            photoDetail.setPhotoData(photo.getBytes());
            photoDetails.add(photoDetail);

        }
        Features features = Features.builder()
                .battery(itemRequest.getFeatures().getBattery())
                .cpu(itemRequest.getFeatures().getCpu())
                .ramRom(itemRequest.getFeatures().getRamRom())
                .screen(itemRequest.getFeatures().getScreen())
                .others(itemRequest.getFeatures().getOthers())
                .sensor(itemRequest.getFeatures().getSensor())
                .build();
        Items items = Items.builder()
                .availability(itemRequest.getAvailableAmount() !=0)
                .brand(itemRequest.getBrand())
                .category(itemRequest.getCategory())
                .shortDesc(itemRequest.getShortDesc())
                .photoDetails(photoDetails)
                .features(features)
                .build();
        itemsRepository.save(items);
    }

    public  List<ItemsResponse> getProducts(){

        List<Items> itemsDTOS = itemsRepository.findAll();
        List<ItemsResponse> itemsResponses = new ArrayList<>();
        for(Items items:itemsDTOS){
            ItemsResponse itemsResponse = ItemsResponse.builder()
                    .id(items.getId())
                    .availability(items.isAvailability())
                    .brand(items.getBrand())
                    .category(items.getCategory())
                    .shortDesc(items.getShortDesc())
                    .photoDetails(items.getPhotoDetails())
                    .title(items.getTitle())
                    .features(items.getFeatures())
                    .availableAmount(items.getAvailableAmount())
                    .build();
            itemsResponses.add(itemsResponse);
        }
        return itemsResponses;

    }
    public  ItemsResponse getProduct(String id){

        Optional<Items> item = itemsRepository.findById(id);
        return item.map(items -> ItemsResponse.builder()
                .id(items.getId())
                .availability(items.isAvailability())
                .brand(items.getBrand())
                .category(items.getCategory())
                .shortDesc(items.getShortDesc())
                .photoDetails(items.getPhotoDetails())
                .title(items.getTitle())
                .availableAmount(items.getAvailableAmount())
                .features(items.getFeatures())
                .build()).orElse(null);
    }
    public void updateItem(ItemRequest itemRequest, List<MultipartFile> photos,String id) throws IOException {
        Optional<Items> item = itemsRepository.findById(id);
        if(item.isPresent()){

            List<PhotoDetail> photoDetails = new ArrayList<>();
            for (MultipartFile photo : photos) {
                PhotoDetail photoDetail = new PhotoDetail();
                photoDetail.setId(UUID.randomUUID().toString());
                photoDetail.setPhotoName(photo.getOriginalFilename());
                photoDetail.setPhotoType(photo.getContentType());
                photoDetail.setPhotoData(photo.getBytes());
                photoDetails.add(photoDetail);

            }

            if(itemRequest.getAvailableAmount() != 0){
                item.get().setAvailability(true);
                item.get().setAvailableAmount(itemRequest.getAvailableAmount());
            }
            if(itemRequest.getBrand() != null){
                item.get().setBrand(itemRequest.getBrand());
            }
            if(itemRequest.getCategory() != null){
                item.get().setCategory(itemRequest.getCategory());
            }
            if(photoDetails != null){
                item.get().setPhotoDetails(photoDetails);
            }
            if(itemRequest.getShortDesc() !=  null){
                item.get().setShortDesc(itemRequest.getShortDesc());
            }
            if(itemRequest.getTitle() != null){
                item.get().setTitle(itemRequest.getTitle());
            }
            if(itemRequest.getFeatures() != null){
                item.get().setFeatures(itemRequest.getFeatures());
            }
            itemsRepository.save(item.get());
        }

    }

    public void deleteItem(String id) {
        Optional<Items> item = itemsRepository.findById(id);
        if(item.isPresent()){
            itemsRepository.deleteById(id);
        }
    }
}
