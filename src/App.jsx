import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home1 from "./Pages/Home";
import Services1 from "./Pages/Services";


export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="home" className="h-auto">
        <Home1 />
      </section>
      <section id="services" className="h-auto">
        <Services1/>
      </section>
      <section id="services" className="h-auto">

      </section>
      <section id="projects" className="h-auto">

      </section>
      <section id="contact" className="h-auto">
      </section>

    </div>
  );
}