package com.example.backend.repository;

import com.example.backend.model.FoodPickup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FoodPickupRepository extends JpaRepository<FoodPickup, Long> {
    List<FoodPickup> findByClientId(String clientId);

    @Query("SELECT f FROM FoodPickup f WHERE YEAR(f.pickupDate) = :year AND MONTH(f.pickupDate) = :month AND f.place = :place")
    List<FoodPickup> findByYearMonthPlace(@Param("year") int year, @Param("month") int month, @Param("place") String place);
}