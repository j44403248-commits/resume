import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home1 from "./Pages/Home";
import Services1 from "./Pages/Services";
import Works from "./Pages/work";
import Process1 from "./Pages/process";
import Fqs from "./Pages/Fqs";
import Pricing1 from "./Pages/Pricing";
import Samples1 from "./Pages/Samples";
import Footer from "./Components/Common/Footer";
import WhatsAppFloatingBtn from "./Pages/whatapp";

export default function Home() {
  return (
    <div className="bg-black min-h-screen selection:bg-yellow-500 selection:text-black">
      {/* Fixed Navigation */}
      <Navbar />
<WhatsAppFloatingBtn />
      <main>
        {/* HERO SECTION */}
        <section id="home" className="h-auto">
          <Home1 />
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="h-auto">
          <Services1 />
        </section>
        {/* PRICING SECTION (Add your component here when ready) */}
        <section id="pricing" className="h-auto">
        <Pricing1 />
        </section>

        {/* SAMPLES / CASE STUDIES SECTION */}
        <section id="sample" className="h-auto">
          <Samples1 />
        </section>

        {/* WORK / PORTFOLIO SECTION */}
        <section id="work" className="h-auto">
          <Works />
        </section>

        {/* PROCESS / WORKFLOW SECTION */}
        <section id="process" className="h-auto">
          <Process1 />
        </section>

        {/* FAQ SECTION */}
        <section id="fqs" className="h-auto">
          <Fqs />
        </section>
      </main>
      <Footer/>
    </div>
  );
}