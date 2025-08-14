package com.example.govportal.controller;

import com.example.govportal.model.Citizen;
import com.example.govportal.repository.CitizenRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/citizens")
@CrossOrigin(origins = "*")
public class CitizenController {

    private final CitizenRepository repository;

    public CitizenController(CitizenRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ResponseEntity<Citizen> addCitizen(@RequestBody Citizen citizen) {
        Citizen saved = repository.save(citizen);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public List<Citizen> getAll() {
        return repository.findAll();
    }
}