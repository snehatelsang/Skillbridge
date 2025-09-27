import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import TutorsPage from "./components/Tutorspage";
import BookingPage from "./components/BookingPage";
import SignIn from "./components/SignIn";
import Demo from "./pages/Demo"
import BookingsDashboard from "./pages/BookingsDashboard";
import MessagePage from "./pages/MessagePage";
export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tutors" element={<TutorsPage />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/bookings" element={<BookingsDashboard />} />
          <Route path="/messages/:id" element={<MessagePage />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}
