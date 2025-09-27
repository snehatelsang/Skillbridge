import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TutorCard({ tutor }){
  return (
    <div className="card">
      <div className="tutor-row">
        <div className="avatar">{tutor.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
        <div style={{flex:1}}>
          <div className="tutor-name">{tutor.name}</div>
          <div style={{color:'#6b7280', fontSize:13}}>{tutor.subject} • {tutor.location || "Remote"}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:700}}>${tutor.price}/hr</div>
          <div className="badge">{tutor.rating} ★</div>
        </div>
      </div>
      <p style={{marginTop:12, marginBottom:12, color:'#374151'}}>{tutor.about}</p>
      <div style={{display:'flex', gap:8}}>
        <Link to={`/book/${tutor.id}`}><button className="btn btn-primary">Book</button></Link>
        <Link to={`/messages/${tutor.id}`}><button className="btn btn-outline">Message</button></Link>
      </div>
    </div>
  );
}
