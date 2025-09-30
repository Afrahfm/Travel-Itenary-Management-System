package com.examly.springapp.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.ItineraryEvent;
import com.examly.springapp.service.ItineraryService;

@RestController
@RequestMapping("/api/itinerary")
@CrossOrigin(origins = "*")
public class ItineraryController {

    private final ItineraryService service;

    public ItineraryController(ItineraryService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ItineraryEvent> addEvent(@RequestBody ItineraryEvent event) {
        return ResponseEntity.ok(service.addEvent(event));
    }

    @GetMapping("/{tripName}")
    public ResponseEntity<List<ItineraryEvent>> getEventsByTripName(@PathVariable String tripName) {
        return ResponseEntity.ok(service.getEventsByTripName(tripName));
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<ItineraryEvent> getEventById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getEventById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItineraryEvent> updateEvent(@PathVariable Long id, @RequestBody ItineraryEvent event) {
        return ResponseEntity.ok(service.updateEvent(id, event));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable Long id) {
        service.deleteEvent(id);
        return ResponseEntity.ok("Event deleted successfully");
    }

    @GetMapping
    public ResponseEntity<List<ItineraryEvent>> getAllEvents() {
        return ResponseEntity.ok(service.getAllEvents());
    }
}
