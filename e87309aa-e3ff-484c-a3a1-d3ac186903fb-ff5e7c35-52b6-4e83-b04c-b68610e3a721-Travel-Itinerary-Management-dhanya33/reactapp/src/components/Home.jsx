import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1 className="home-title">Travel Itinerary Planner</h1>
        <div className="home-buttons">
          <Link to="/add" className="btn-primary">
            Add Event
          </Link>
          <Link to="/view" className="btn-primary">
            View Events
          </Link>
          <Link to="/expenses" className="btn-primary" >Expenses</Link>
<Link to="/documents" className="btn-primary">Documents</Link>
        </div>
      </div>

      <div className="hero-card">
        <p>Plan your trips and daily events effortlessly!</p>
      </div>
    </div>
  );
};

export default Home;
