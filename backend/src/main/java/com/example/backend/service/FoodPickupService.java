package com.example.backend.service;

import com.example.backend.model.FoodPickup;
import com.example.backend.repository.ClientDataRepository;
import com.example.backend.repository.FoodPickupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FoodPickupService {

    @Autowired
    private FoodPickupRepository foodPickupRepository;

    @Autowired
    private ClientDataRepository clientDataRepository;

    // Register a pickup for a client with a specified place
    public String registerPickup(String clientId, String place) {
        return clientDataRepository.findById(clientId).map(client -> {
            FoodPickup foodPickup = FoodPickup.builder()
                    .client(client)
                    .pickupDate(LocalDateTime.now())
                    .place(place)
                    .build();
            foodPickupRepository.save(foodPickup);
            return "Pickup registered successfully for client ID: " + clientId + " at " + place;
        }).orElse("Client not found with ID: " + clientId);
    }
    // Get all pickups for a specific client 
    public List<FoodPickup> getClientPickups(String clientId) {
        return foodPickupRepository.findByClientId(clientId);
    }


    public List<FoodPickup> getPickupsByYearMonthPlace(int year, int month, String place) {
        return foodPickupRepository.findByYearMonthPlace(year, month, place);
    }
}