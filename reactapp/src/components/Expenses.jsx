import React, { useState } from "react";

const Expenses = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, item: "Hotel", amount: 1000, date: "2025-09-12", category: "Hotel" },
    { id: 2, item: "Food", amount: 200, date: "2025-09-12", category: "Food" }
  ]);

  const [formData, setFormData] = useState({ item: "", amount: "", date: "", category: "Food" });
  const [selectedDate, setSelectedDate] = useState(""); // to filter total

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newExpense = { id: expenses.length + 1, ...formData };
    setExpenses([...expenses, newExpense]);
    setFormData({ item: "", amount: "", date: "", category: "Food" });
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  // Calculate total for selected date
  const totalAmount = selectedDate
    ? expenses
        .filter(exp => exp.date === selectedDate)
        .reduce((sum, exp) => sum + Number(exp.amount), 0)
    : 0;

  return (
    <div className="form-container">
      <h1>Expenses</h1>

      <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="item"
          placeholder="Item"
          value={formData.item}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
                  type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Food">Food</option>
          <option value="Hotel">Hotel</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>

      <div style={{ marginBottom: "10px" }}>
        <label>Select date to see total: </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <p>Total Amount: {totalAmount}</p>
      </div>

      <table className="events-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp.id}>
              <td>{exp.item}</td>
              <td>{exp.amount}</td>
              <td>{exp.date}</td>
              <td>{exp.category}</td>
              <td>
                <button onClick={() => handleDelete(exp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
