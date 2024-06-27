package com.Star_Mobile.Star_Mobile.Items;

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

@RestController
@RequestMapping("api/v1/items")
@RequiredArgsConstructor
public class ItemController {

    private final ItemsService itemsService;
    private final ObjectMapper objectMapper;

    @PostMapping("/save")
    public ResponseEntity<String> saveItems(@RequestPart("itemRequest") String itemRequest,
                                            @RequestPart("photos") List<MultipartFile> photos) {
        try {
            ItemRequest itemRequest1 = objectMapper.readValue(itemRequest, ItemRequest.class);
            itemsService.saveItems(itemRequest1, photos);
            return new ResponseEntity<>("Items saved successfully", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("Error saving items: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/get")
    public ResponseEntity<List<ItemsResponse>> getItems(){
        if(!itemsService.getProducts().isEmpty()){
            return ResponseEntity.ok(itemsService.getProducts());
        }
        return ResponseEntity.badRequest().body(null);
    }
    @GetMapping("/{id}/get/item")
    public ResponseEntity<?> getItem(@PathVariable String id){

       try{
           if(itemsService.getProduct(id) != null){
               return ResponseEntity.ok(itemsService.getProduct(id));
           }else{
               return ResponseEntity.notFound().build();
           }

       }catch (Exception e){
           return ResponseEntity.badRequest().body(e);
       }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateItem(@PathVariable String id,
                                        @RequestPart("itemsRequest") String itemsRequest,
                                        @RequestPart("photos") List<MultipartFile> photos
                                        ) throws JsonProcessingException {
        ItemRequest itemRequest = objectMapper.readValue(itemsRequest, ItemRequest.class);
        try{
            itemsService.updateItem(itemRequest,photos,id);
            return ResponseEntity.ok().build();
        }catch (IOException e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @DeleteMapping("/delete/item/{id}")
    public  ResponseEntity<?>  deleteItem(@PathVariable String id){
        try{
            itemsService.deleteItem(id);
            return ResponseEntity.ok("Delete successful");
        }catch (Exception e){
            return ResponseEntity.notFound().build();
        }
    }

}
