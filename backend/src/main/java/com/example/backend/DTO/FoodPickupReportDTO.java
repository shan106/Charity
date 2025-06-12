package com.example.backend.DTO;

public class FoodPickupReportDTO {

    private String clientName;
    private String pickupDate;
    private String place;

    public FoodPickupReportDTO(String clientName, String pickupDate, String place) {
        this.clientName = clientName;
        this.pickupDate = pickupDate;
        this.place = place;
    }

    // Getters en setters
    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }
    public String getPickupDate() { return pickupDate; }
    public void setPickupDate(String pickupDate) { this.pickupDate = pickupDate; }
    public String getPlace() { return place; }
    public void setPlace(String place) { this.place = place; }
}
