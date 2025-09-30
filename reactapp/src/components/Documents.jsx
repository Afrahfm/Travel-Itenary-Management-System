import React, { useState } from "react";
import "./Documents.css";

const typeColors = {
  Passport: "#3b82f6", // blue
  Ticket: "#10b981",   // green
  ID: "#8b5cf6",       // purple
  Other: "#9ca3af"     // gray
};

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "Passport",
    date: "",
    notes: "",
    file: null
  });
  const [filterType, setFilterType] = useState("All");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setDocuments([...documents, { id: documents.length + 1, ...formData }]);
    setFormData({ name: "", type: "Passport", date: "", notes: "", file: null });
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  const filteredDocs = documents
    .filter(doc => filterType === "All" || doc.type === filterType)
    .filter(doc => doc.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="form-container">
      <h1>Travel Documents</h1>

      <form onSubmit={handleAdd} className="document-form">
        <input
          type="text"
          name="name"
          placeholder="Document Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Passport">Passport</option>
          <option value="Ticket">Ticket</option>
          <option value="ID">ID</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Notes (optional)"
          value={formData.notes}
          onChange={handleChange}
        />
        <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Add Document</button>
      </form>

     <div className="controls">
        <span>Total Documents: {filteredDocs.length}</span>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All</option>
          <option value="Passport">Passport</option>
          <option value="Ticket">Ticket</option>
          <option value="ID">ID</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="documents-grid">
        {filteredDocs.map(doc => (
          <div key={doc.id} className="document-card">
            <h3>{doc.name}</h3>
            <p style={{ color: typeColors[doc.type], fontWeight: "bold" }}>{doc.type}</p>
            <p>Date: {doc.date}</p>
            {doc.notes && <p>Notes: {doc.notes}</p>}
            {doc.file && <p>File: {doc.file.name}</p>}
            <button onClick={() => handleDelete(doc.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;