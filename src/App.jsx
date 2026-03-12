import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Common/Navbar";
import Home1 from "./Pages/Home";
import Services1 from "./Pages/Services";
import Footer from "./Components/Common/Footer";
import Pricing from "./Pages/Pricing";
import Samples from "./Pages/Samples";
import Checkout from "./Components/Checkout/Checkout";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <section id="home" className="h-auto">
                <Home1 />
              </section>
              <section id="services" className="h-auto">
                <Services1 />
              </section>
              <section id="pricing" className="h-auto">
                <Pricing />
              </section>
              <section id="samples" className="h-auto">
                <Samples />
              </section>
            </>
          }
        />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </Router>
  );
}