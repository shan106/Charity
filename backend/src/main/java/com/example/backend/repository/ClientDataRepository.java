package com.example.backend.repository;

import com.example.backend.model.ClientData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientDataRepository extends JpaRepository<ClientData, String> {

    boolean existsByEmail(String email);
    List<ClientData> findByNameContainingIgnoreCase(String name);
}
