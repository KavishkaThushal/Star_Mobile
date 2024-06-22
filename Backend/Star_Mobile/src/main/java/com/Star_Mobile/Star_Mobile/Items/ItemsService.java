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
        List<Bundle> bundles = new ArrayList<>();
        for(Bundle bundle: itemRequest.getBundles() ){
            Bundle bundle1 = Bundle.builder()
                    .ramCapacity(bundle.getRamCapacity())
                    .storageCapacity(bundle.getStorageCapacity())
                    .price(bundle.getPrice())
                    .build();
            bundles.add(bundle1);
        }
        Items items = Items.builder()
                .availability(itemRequest.isAvailability())
                .brand(itemRequest.getBrand())
                .category(itemRequest.getCategory())
                .version(itemRequest.getVersion())
                .shortDesc(itemRequest.getShortDesc())
                .specification(itemRequest.getSpecification())
                .photoDetails(photoDetails)
                .bundles(bundles)
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
                    .version(items.getVersion())
                    .shortDesc(items.getShortDesc())
                    .specification(items.getSpecification())
                    .photoDetails(items.getPhotoDetails())
                    .bundles(items.getBundles())
                    .build();
            itemsResponses.add(itemsResponse);
        }
        return itemsResponses;

    }
    public  ItemsResponse getProduct(String id){

        Optional<Items> item = itemsRepository.findById(id);
        return item.map(items -> ItemsResponse.builder()
                .availability(items.isAvailability())
                .brand(items.getBrand())
                .category(items.getCategory())
                .version(items.getVersion())
                .shortDesc(items.getShortDesc())
                .specification(items.getSpecification())
                .photoDetails(items.getPhotoDetails())
                .bundles(items.getBundles())
                .build()).orElse(null);
    }
    public void updateItem(ItemRequest itemRequest, List<MultipartFile> photos,String id) throws IOException {
        Optional<Items> item = itemsRepository.findById(id);
        if(item.isPresent()){

//            List<PhotoDetail> photoDetails = item.get().getPhotoDetails();

//            for (int i = 0; i < photoDetails.size(); i++) {
//
//                String photoId = photoDetails.get(i).getId().trim();
//
//                for(int j=0; j< itemRequest.getPhotoId().size(); j++){
//                    String pId =itemRequest.getPhotoId().get(j);
//                    if (photoId.equals(pId)) {
//                        photoDetails.get(i).setPhotoData();
//                    }
//                }
//
//
//            }

            List<PhotoDetail> photoDetails = new ArrayList<>();
            for (MultipartFile photo : photos) {
                PhotoDetail photoDetail = new PhotoDetail();
                photoDetail.setId(UUID.randomUUID().toString());
                photoDetail.setPhotoName(photo.getOriginalFilename());
                photoDetail.setPhotoType(photo.getContentType());
                photoDetail.setPhotoData(photo.getBytes());
                photoDetails.add(photoDetail);

            }

            List<Bundle> bundles = new ArrayList<>();
            for(Bundle bundle: itemRequest.getBundles() ){
                Bundle bundle1 = Bundle.builder()
                        .ramCapacity(bundle.getRamCapacity())
                        .storageCapacity(bundle.getStorageCapacity())
                        .price(bundle.getPrice())
                        .build();
                bundles.add(bundle1);
            }

            item.get().setAvailability(itemRequest.isAvailability());
            item.get().setBundles(bundles);
            item.get().setBrand(itemRequest.getBrand());
            item.get().setCategory(itemRequest.getCategory());
            item.get().setPhotoDetails(photoDetails);
            item.get().setShortDesc(itemRequest.getShortDesc());
            item.get().setSpecification(itemRequest.getSpecification());
            item.get().setVersion(itemRequest.getVersion());

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
