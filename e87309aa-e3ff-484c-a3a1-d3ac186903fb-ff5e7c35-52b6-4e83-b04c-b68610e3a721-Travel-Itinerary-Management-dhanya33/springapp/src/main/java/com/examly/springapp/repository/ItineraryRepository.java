package com.examly.springapp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.model.ItineraryEvent;

public interface ItineraryRepository extends JpaRepository<ItineraryEvent, Long> {
    List<ItineraryEvent> findByTripNameIgnoreCase(String tripName);
}
