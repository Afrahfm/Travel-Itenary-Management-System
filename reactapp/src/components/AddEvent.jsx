import React, { useState } from "react";
import axios from "axios";
export default function AddEvent() {
  const [form, setForm] = useState({
    tripName: "",
    eventDate: "",
    eventTitle: "",
    eventTime: "",
    eventLocation: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://8080-daabedffeacdfaabfddfceeedaffecbebcbea.premiumproject.examly.io/api/itinerary",
        form
      );

      alert("Event added successfully!");
      
      setForm({
        tripName: "",
        eventDate: "",
        eventTitle: "",
        eventTime: " ",
        eventLocation: "",
        notes: ""
      });
    } catch (error) {
      console.error(error);
      alert("Error adding event!");
    }
  };
  return (
    <div className="form-container">
      <h2>Add Itinerary Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tripName">Trip Name</label>
        <input
          id="tripName"
          type="text"
          name="tripName"
          value={form.tripName}
          onChange={handleChange}
        />
        <label htmlFor="eventDate">Event Date</label>
        <input
          id="eventDate"
          type="date"
          name="eventDate"
          value={form.eventDate}
          onChange={handleChange}
        />

        <label htmlFor="eventTitle">Event Title</label>
        <input
          id="eventTitle"
          type="text"
          name="eventTitle"
          value={form.eventTitle}
          onChange={handleChange}
        />
        <label htmlFor="eventTime">Event Time</label>
        <input
          id="eventTime"
          type="time"
          name="eventTime"
          value={form.eventTime}
          onChange={handleChange}
        />

        <label htmlFor="eventLocation">Event Location</label>
        <input
          id="eventLocation"
          type="text"
          name="eventLocation"
          value={form.eventLocation}
          onChange={handleChange}
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={form.notes}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="btn-primary">
          Add Event
        </button>
      </form>
    </div>
  );
}
