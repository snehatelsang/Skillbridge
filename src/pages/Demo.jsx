import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Demo() {
  const [isMuted, setIsMuted] = useState(false);
  const [videoOn, setVideoOn] = useState(true);
  const [callEnded, setCallEnded] = useState(false);
  const navigate = useNavigate();

  const handleEndCall = () => {
    setCallEnded(true);
    setTimeout(() => {
      navigate("/"); // go back to dashboard after 2s
    }, 2000);
  };

  if (callEnded) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#111",
          color: "white",
          fontSize: "24px",
        }}
      >
        📞 Call Ended. Redirecting...
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <header style={{ padding: "10px", background: "#2d2f31", color: "white" }}>
        <h2>📹 SkillBridge Video Call Demo</h2>
      </header>

      {/* Video call area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          background: "#f5f5f5",
          padding: "20px",
        }}
      >
        {/* User video */}
        <div
          style={{
            width: "45%",
            height: "65%",
            background: "linear-gradient(135deg, #333, #111)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          {videoOn ? (
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#666",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            >
              👩
            </div>
          ) : (
            <div style={{ fontSize: "16px", marginBottom: "10px" }}>
              📷 Video Off
            </div>
          )}
          <span style={{ fontSize: "18px", marginBottom: "8px" }}>You</span>
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "red",
              color: "white",
              padding: "3px 10px",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            {isMuted ? "🔇 Muted" : "🔴 Live"}
          </span>
        </div>

        {/* Tutor video */}
        <div
          style={{
            width: "45%",
            height: "65%",
            background: "linear-gradient(135deg, #444, #222)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "#777",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            👨‍🏫
          </div>
          <span style={{ fontSize: "18px", marginBottom: "8px" }}>Tutor</span>
          <span
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "green",
              color: "white",
              padding: "3px 10px",
              borderRadius: "12px",
              fontSize: "12px",
            }}
          >
            🟢 Connected
          </span>
        </div>
      </div>

      {/* Call controls */}
      <footer
        style={{
          padding: "15px",
          background: "#2d2f31",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button
          onClick={() => setIsMuted(!isMuted)}
          style={{
            padding: "10px 20px",
            background: isMuted ? "gray" : "green",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {isMuted ? "🔇 Unmute" : "🎤 Mute"}
        </button>

        <button
          onClick={() => setVideoOn(!videoOn)}
          style={{
            padding: "10px 20px",
            background: videoOn ? "blue" : "gray",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {videoOn ? "📷 Turn Off Video" : "📷 Turn On Video"}
        </button>

        <button
          onClick={handleEndCall}
          style={{
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          ⏹ End Call
        </button>
      </footer>
    </div>
  );
}
