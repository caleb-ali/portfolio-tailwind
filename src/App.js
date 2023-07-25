
import React from "react";
import "./input.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Heroimg";
import Projects from "../src/components/Projectlist";
import About from "../src/components/Profile";
import Contact from "../src/components/Contactpage";
import Footer from "../src/components/Footerpage";

function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <Projects/>
     <About/>
     <Contact/>
     <Footer/>
    </div>
  );
}
export default App;



