package com.Star_Mobile.Star_Mobile.Items;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/userItems")
@RequiredArgsConstructor
public class ItemUserController {
    private final ItemsService itemsService;

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
}
