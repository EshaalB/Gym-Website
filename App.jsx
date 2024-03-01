import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Plans from "./components/Plans";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BarLoader from "./components/BarLoader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <BarLoader />}
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="plans">
          <Plans />
        </section>

        <section id="trainers">
          <Trainers />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
