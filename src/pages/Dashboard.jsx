import React from "react";
import Hero from "../components/Hero";
import TutorsPage from "../components/Tutorspage";

export default function Dashboard(){
  return (
    <div>
      <Hero />
      <div className="container">
        <h3 style={{marginTop:24}}>Featured Tutors</h3>
        <TutorsPage />
      </div>
    </div>
  );
}
