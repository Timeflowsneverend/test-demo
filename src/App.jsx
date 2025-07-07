import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Button />
      <div className="h-[70vh]" />
      <div />
      <Footer />
    </>
  );
};

export default App;
