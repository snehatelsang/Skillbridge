import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const userId = 1; // TODO: replace with logged-in user

  useEffect(() => {
    axios.get(`http://localhost:4000/api/bookings/${userId}`)
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? <p>No bookings yet.</p> : (
        <ul>
          {bookings.map((b) => (
            <li key={b.id}>
              {b.tutor.name} - {new Date(b.date).toDateString()} at {b.time} ({b.mode})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
