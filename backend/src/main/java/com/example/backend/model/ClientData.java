package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Builder
@Table(name = "client_data")
public class ClientData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private String id;

    @Column(name= "name")
    private String name;
    @Column(name= "birth")
    private LocalDate birth;
    @Column(name= "adres")
    private String adres;
    @Column(name= "tel")
    private int tel;
    @Column(name= "email")
    private String email;
}
