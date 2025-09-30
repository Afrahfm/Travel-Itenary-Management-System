package com.examly.springapp.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.ItineraryEvent;
import com.examly.springapp.repository.ItineraryRepository;

@Service
public class ItineraryService {

    private final ItineraryRepository repo;

    public ItineraryService(ItineraryRepository repo) {
        this.repo = repo;
    }

    public ItineraryEvent addEvent(ItineraryEvent event) {
        return repo.save(event);
    }

    public List<ItineraryEvent> getEventsByTripName(String tripName) {
        return repo.findByTripNameIgnoreCase(tripName);
    }

    public ItineraryEvent getEventById(Long id) {
        return repo.findById(id)
                   .orElseThrow(() -> new RuntimeException("Event not found"));
    }

    public ItineraryEvent updateEvent(Long id, ItineraryEvent event) {
        ItineraryEvent existing = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Event not found"));
        existing.setTripName(event.getTripName());
        existing.setEventDate(event.getEventDate());
        existing.setEventTitle(event.getEventTitle());
        existing.setEventTime(event.getEventTime());
        existing.setEventLocation(event.getEventLocation());
        existing.setNotes(event.getNotes());
        return repo.save(existing);
    }

    public void deleteEvent(Long id) {
        repo.deleteById(id);
    }
    public List<ItineraryEvent> getAllEvents() {
        return repo.findAll();
    }
}
