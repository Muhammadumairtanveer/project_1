import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Cards from "./components/Cards";
import Crosel from "./components/crosel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="sm:w-full h-full">
    <div>
      <Navbar />
    </div>
  
    <div class>
      <Section />
    </div>
  
    <div className="flex items-center justify-center w-full lg:w-full mt-4">
      <Crosel />
    </div>
  
    <div className="flex flex-wrap justify-center gap-8 p-2 lg:flex-row lg:w-full md:flex-row md:items-center sm:flex-col max-sm:p-5">
      <Cards />
      <Cards />
      <Cards />

    </div>
  
    <div className="w-full">
      <Footer />
    </div>
  </div>
  

      
  );
};

export default App;
