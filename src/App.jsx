import React from "react";
import { useState } from "react";
import "./App.css";
import TopBar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
