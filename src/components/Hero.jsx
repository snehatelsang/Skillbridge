import React from "react";
import { Link } from "react-router-dom";

export default function Hero(){
  return (
    <section className="hero container">
      <div className="hero-left">
        <h1>Find expert tutors & boost your skills — one session at a time</h1>
        <p>Verified tutors, flexible scheduling, online and in-person sessions. Book, learn, and grow with SkillBridge.</p>
        <div style={{marginTop:18}}>
          <Link to="/tutors"><button className="btn btn-primary">Find Tutors</button></Link>
          <Link to="/signin" style={{marginLeft:10}}><button className="btn btn-outline">Sign in</button></Link>
        </div>

        <div className="subjects">
          <div className="subject">
            <div className="badge">Math</div>
            <h4>Calculus & Algebra</h4>
          </div>
          <div className="subject">
            <div className="badge">CS</div>
            <h4>Python & JS</h4>
          </div>
          <div className="subject">
            <div className="badge">Eng</div>
            <h4>Essay Writing</h4>
          </div>
        </div>
      </div>

      <div className="hero-right" style={{minWidth:300}}>
        <div className="card">
          <h3 style={{marginTop:0}}>Experience our demo</h3>
          <p style={{color:'#6b7280'}}>HD video call, screen sharing, interactive whiteboard.</p>
          <div style={{display:'flex', gap:10, marginTop:12}}>
            <Link to="/Demo">
            <button className="btn btn-primary">Try Demo</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
