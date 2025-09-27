import React, {useEffect, useState} from "react";
import TutorCard from "./TutorCard";
import { api, API_BASE } from "../api"; // we'll use fetch directly

export default function TutorsPage(){
  const [tutors, setTutors] = useState([]);
  const [q, setQ] = useState("");

  useEffect(()=>{
    fetch(`${API_BASE}/tutors`).then(r=>r.json()).then(setTutors);
  },[]);

  const filtered = tutors.filter(t => t.name.toLowerCase().includes(q.toLowerCase()) || t.subject.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="container">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2>Find a Tutor</h2>
        <input placeholder="Search tutors or subjects" value={q} onChange={e=>setQ(e.target.value)} style={{padding:8, borderRadius:8, border:'1px solid #e6e7eb'}} />
      </div>

      <div className="tutors-grid">
        {filtered.map(t => <TutorCard key={t.id} tutor={t} />)}
      </div>
    </div>
  );
}
