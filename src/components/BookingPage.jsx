import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookingPage() {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("Video Call");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/bookings", {
        studentId: 1, // replace with logged-in user ID
        tutorId: parseInt(id),
        date: `${date}T${time}:00.000Z`, // 👈 combine into DateTime
        mode,
      });
      alert("✅ Booking confirmed!");
      setDate("");
      setTime("");
      setMode("Video Call");
    } catch (err) {
      console.error(err);
      alert("❌ Booking failed. Check backend logs.");
    }
  };

  return (
    <div className="booking-container">
      <h2>📅 Book Session with Tutor</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <label>Mode</label>
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option>In-Person</option>
          <option>Video Call</option>
        </select>

        <button type="submit" className="confirm-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

