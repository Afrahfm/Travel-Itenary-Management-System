import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ViewEvents.css";

export default function ViewEvents() {
  const [tripName, setTripName] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const fetchEvents = async () => {
    if (!tripName.trim()) {
      alert("Please enter a trip name");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://8080-daabedffeacdfaabfddfceeedaffecbebcbea.premiumproject.examly.io/api/itinerary/${tripName}`

      );
      setEvents(res.data);
    } catch (err) {
      console.error(err);
      setEvents([]);
      setError("Failed to fetch events. Make sure the trip name exists.");

    } finally {

      setLoading(false);

    }

  };
  const deleteEvent = async (id) => {

    try {

      await axios.delete(

        `https://8080-daabedffeacdfaabfddfceeedaffecbebcbea.premiumproject.examly.io/api/itinerary/${id}`

      );

      alert("Event deleted successfully!");
      fetchEvents();

    } catch (err) {

      console.error(err);
      alert("Error deleting event!");

    }

  };

  return (

    <div className="view-container">
      <h2 className="title">View Events by Trip</h2>
      <div className="search-box">
        <input
        type="text"

        placeholder="Enter trip name"

        value={tripName}

        onChange={(e) => setTripName(e.target.value)}

        />

        <button className="btn-primary" onClick={fetchEvents}>

          Fetch Events

          </button>
          </div>



          {loading && <p>Loading events...</p>}

          {error && <p className="error">{error}</p>}



          {events.length > 0 && (

            <table className="events-table">

              <thead>

                <tr>

                  <th>ID</th>

                  <th>Event Title</th>
                  <th>Date</th>
                  <th>Time</th>

                  <th>Location</th>

                  <th>Notes</th>
                  <th>Actions</th>

                  </tr>

                  </thead>
                  <tbody>

                    {events.map((ev) => (

                      <tr key={ev.id}>

                        <td>{ev.id}</td>
                        <td>{ev.eventTitle}</td>
                        <td>{ev.eventDate}</td>

                        <td>{ev.eventTime}</td>
                        <td>{ev.eventLocation}</td>

                        <td>{ev.notes}</td>

                        <td>

                          {/* Update Button */}

                          <button

                          className="btn-primary"

                          onClick={() => navigate(`/update/${ev.id}`)}

                          style={{ marginRight: "5px" }}

                          >

                             Update

                            </button>


                            {/* Delete Button */}

                            <button
                            className="btn-danger"

                            onClick={() => deleteEvent(ev.id)}

                            >

                               Delete

                              </button>
                              </td>
                              </tr>

                    ))}

                    </tbody>
                    </table>
          )}
          {!loading && !error && events.length === 0 && (

            <p className="empty-state">No events found</p>

          )}
          </div>
  );

 }

         