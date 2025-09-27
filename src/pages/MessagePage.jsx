import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MessagesPage() {
  const { id } = useParams(); // tutorId
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const studentId = 1; // fake logged in student

  useEffect(() => {
    axios.get(`http://localhost:4000/messages/${studentId}/${id}`)
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    await axios.post("http://localhost:4000/messages", {
      fromUserId: studentId,
      toUserId: parseInt(id),
      content: newMessage,
    });

    setNewMessage("");
    const res = await axios.get(`http://localhost:4000/messages/${studentId}/${id}`);
    setMessages(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>💬 Chat with Tutor #{id}</h2>
      <div style={{
        border: "1px solid #ddd",
        padding: "10px",
        height: "300px",
        overflowY: "auto",
        marginBottom: "10px"
      }}>
        {messages.map(m => (
          <div key={m.id} style={{
            textAlign: m.fromUserId === studentId ? "right" : "left",
            margin: "5px 0"
          }}>
            <span style={{
              display: "inline-block",
              padding: "8px",
              borderRadius: "8px",
              background: m.fromUserId === studentId ? "#007bff" : "#eee",
              color: m.fromUserId === studentId ? "#fff" : "#000"
            }}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
