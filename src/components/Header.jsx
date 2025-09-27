import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
  return (
    <header className="header">
      <div className="brand">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#eef2ff"/>
          <path d="M6 12h12" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>SkillBridge</div>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/tutors" className="nav-link">Find Tutors</Link>
        <Link to="/signin" className="btn btn-outline">Sign in</Link>
      </nav>
    </header>
  );
}
