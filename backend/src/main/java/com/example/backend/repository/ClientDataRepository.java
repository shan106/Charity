package com.example.backend.repository;

import com.example.backend.model.ClientData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientDataRepository extends JpaRepository<ClientData, String> {

    boolean existsByEmail(String email);
}
