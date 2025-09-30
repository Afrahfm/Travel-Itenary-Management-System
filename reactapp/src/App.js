import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddEvent from "./components/AddEvent";
import ViewEvents from "./components/ViewEvents";
import UpdateEvent from "./components/UpdateEvent";
import Expenses from "./components/Expenses";   // Adjust path if different
import Documents from "./components/Documents"; // Adjust path if different
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/view" element={<ViewEvents />} />
        <Route path="/update/:id" element={<UpdateEvent />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/documents" element={<Documents />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
