package com.examly.springapp.model;
import java.time.LocalDate;
import java.time.LocalTime;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "itinerary_events")
public class ItineraryEvent {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String tripName;
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate eventDate;
    @JsonFormat(pattern="HH:mm")
    @Schema(type="string", example="10:00", description="Event time in HH:mm format")
    private LocalTime eventTime;
    private String eventTitle;
    private String eventLocation;
    private String notes;
public ItineraryEvent()
{ }
public ItineraryEvent(Long id,String tripName, LocalDate eventDate, LocalTime eventTime, String eventTitle,
        String eventLocation, String notes) {
    this.id=id;
    this.tripName = tripName;
    this.eventDate = eventDate;
    this.eventTime = eventTime;
    this.eventTitle = eventTitle;
    this.eventLocation = eventLocation;
    this.notes=notes;
}
public Long getId() {
    return id;
}
public void setId(Long id) {
    this.id = id;
}
public String getTripName() {
return tripName;
}
public void setTripName(String tripName) {
this.tripName = tripName;
}
public LocalDate getEventDate() {
return eventDate;
}
public void setEventDate(LocalDate eventDate) {
this.eventDate = eventDate;
}
public LocalTime getEventTime() {
return eventTime;
}
public void setEventTime(LocalTime eventTime) {
this.eventTime = eventTime;
}
public String getEventTitle() {
return eventTitle;
}
public void setEventTitle(String eventTitle) {
this.eventTitle = eventTitle;
}
public String getEventLocation() {
return eventLocation;
}
public void setEventLocation(String eventLocation) {
this.eventLocation = eventLocation;
}
public String getNotes()
{
return notes;
}
public void setNotes(String notes)
{
this.notes=notes;
}
}

