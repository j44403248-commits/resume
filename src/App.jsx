import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home1 from "./Pages/Home";
import Services1 from "./Pages/Services";
import Footer from "./Components/Common/Footer";
import Pricing from "./Pages/Pricing";
import Samples from "./Pages/Samples";


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
      <section id="Pricing" className="h-auto">
        <Pricing/>
      </section>
      <section id="samples" className="h-auto">
<Samples/>
      </section>
      <section id="contact" className="h-auto">
      </section>
      
<Footer/>
    </div>
  );
}