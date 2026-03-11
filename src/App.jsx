<<<<<<< HEAD
// import { Home } from "lucide-react";
import Footer from "./Components/Common/Footer.jsx";
import Navbar from "./Components/Common/Navbar.jsx";
import Home from "./Components/Pages/Home.jsx";
import Heropricing from "./Components/Pricing/Heropricing.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Home/>
<Heropricing/>

      <Footer/>

    </>
  );
}
=======
import React from "react";
import Navbar from "./Components/Common/Navbar";
import Home1 from "./Pages/Home";
import Services1 from "./Pages/Services";
>>>>>>> 59cb7a7201b1d8f143b4c199902574dad23da64b


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