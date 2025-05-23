package com.example.backend.service;

import com.example.backend.model.ClientData;
import com.example.backend.repository.ClientDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientDataService {
    @Autowired
    private ClientDataRepository clientDataRepository;

    // Get all clients
    public List<ClientData> getAllClients() {
        return clientDataRepository.findAll();
    }

    // Get client by ID
    public Optional<ClientData> getClientById(String id) {
        return clientDataRepository.findById(id);
    }

    // Add a new client
    public ClientData saveClient(ClientData clientData) {
        // Optional: Add validation or checks before saving
        if (clientDataRepository.existsByEmail(clientData.getEmail())) {
            throw new IllegalArgumentException("Client with this email already exists!");
        }
        return clientDataRepository.save(clientData);
    }


    // Update an existing client
    public ClientData updateClient(String id, ClientData updatedClient) {
        return clientDataRepository.findById(id)
                .map(client -> {
                    client.setName(updatedClient.getName());
                    client.setBirth(updatedClient.getBirth());
                    client.setAdres(updatedClient.getAdres());
                    client.setTel(updatedClient.getTel());
                    client.setEmail(updatedClient.getEmail());
                    return clientDataRepository.save(client);
                })
                .orElseGet(() -> {
                    updatedClient.setId(id);
                    return clientDataRepository.save(updatedClient);
                });
    }

    // Delete a client
    public void deleteClient(String id) {
        clientDataRepository.deleteById(id);
    }
}
