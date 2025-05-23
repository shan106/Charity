package com.example.backend.configuration;

import com.example.backend.model.ClientData;
import com.example.backend.repository.ClientDataRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class ClientDataConfiguration {
    @Autowired
    private ClientDataRepository clientDataRepository;

    @PostConstruct
    public void addTestData() {
        // Check if there is already data in the client_data table
        if (clientDataRepository.count() == 0) {
            // Define the test data
            ClientData testClient = ClientData.builder()
                    .name("test")
                    .birth(LocalDate.of(1998, 5, 12))
                    .adres("teststraat 1")
                    .tel(123456789)
                    .email("test@test.be")
                    .build();

            // Add test data to the database
            clientDataRepository.save(testClient);
            System.out.println("Test client added to the database.");
        } else {
            System.out.println("Test data already exists in the database. Skipping addition.");
        }
    }
}
