package com.example.backend.controller;

import com.example.backend.model.FoodPickup;
import com.example.backend.service.FoodPickupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foodpickups")
public class FoodPickupController {

    @Autowired
    private FoodPickupService foodPickupService;

    // Register a food pickup for a client
    @PostMapping("/register/{clientId}")
    public String registerPickup(@PathVariable String clientId, @RequestParam String place) {
        return foodPickupService.registerPickup(clientId, place);
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