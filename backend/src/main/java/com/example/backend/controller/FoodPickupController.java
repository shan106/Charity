package com.example.backend.controller;

import com.example.backend.model.FoodPickup;
import com.example.backend.service.FoodPickupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/foodpickups")
public class FoodPickupController {

    @Autowired
    private FoodPickupService foodPickupService;

    // Register a food pickup for a client
    @PostMapping("/register/{clientId}")
    public ResponseEntity<Map<String, String>> registerPickup(@PathVariable String clientId, @RequestParam String place) {
        String message = foodPickupService.registerPickup(clientId, place);
        Map<String, String> response = new HashMap<>();
        response.put("message", message);
        return ResponseEntity.ok(response);
    }

    // Get all pickups for a client
    @GetMapping("/client/{clientId}")
    public List<FoodPickup> getClientPickups(@PathVariable String clientId) {
        return foodPickupService.getClientPickups(clientId);
    }

    @GetMapping("/filter")
    public List<FoodPickup> getPickupsByYearMonthPlace(
            @RequestParam int year,
            @RequestParam int month,
            @RequestParam String place) {
        return foodPickupService.getPickupsByYearMonthPlace(year, month, place);
    }
}