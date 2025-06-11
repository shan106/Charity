package com.example.backend.controller;

import com.example.backend.model.ClientData;
import com.example.backend.service.ClientDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/clients")
public class ClientDataController {
    @Autowired
    private ClientDataService clientDataService;

    // Get all clients
    @GetMapping
    public List<ClientData> getAllClients() {
        return clientDataService.getAllClients();
    }

    // Get client by ID
    @GetMapping("/{id}")
    public Optional<ClientData> getClientById(@PathVariable String id) {
        return clientDataService.getClientById(id);
    }

    // Add a new client
    @PostMapping
    public ResponseEntity<ClientData> addClient(@RequestBody ClientData clientData) {
        ClientData savedClient = clientDataService.saveClient(clientData);
        return new ResponseEntity<>(savedClient, HttpStatus.CREATED);
    }


    // Update a client
    @PutMapping("/{id}")
    public ClientData updateClient(@PathVariable String id, @RequestBody ClientData updatedClient) {
        return clientDataService.updateClient(id, updatedClient);
    }

    // Delete a client
    @DeleteMapping("/{id}")
    public void deleteClient(@PathVariable String id) {
        clientDataService.deleteClient(id);
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchClient(@RequestParam String query) {
        // Eerst proberen als ID
        Optional<ClientData> byId = clientDataService.getClientById(query);
        if (byId.isPresent()) {
            return ResponseEntity.ok(byId.get());
        }

        // Daarna zoeken op naam (bv. case-insensitive bevat)
        List<ClientData> byName = clientDataService.findClientsByName(query);
        if (!byName.isEmpty()) {
            if (byName.size() == 1) {
                return ResponseEntity.ok(byName.get(0));
            } else {
                // Optioneel: geef lijst terug als er meerdere matches zijn
                return ResponseEntity.status(HttpStatus.MULTIPLE_CHOICES).body(byName);
            }
        }
        return ResponseEntity.notFound().build();
    }
}
