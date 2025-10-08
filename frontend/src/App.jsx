import { motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from './components/Navbar';
import Hero from './views/Hero';
import Reserve from './views/Reserve';
import Courts from './views/Courts';
import PriceList from './views/PriceList';
import Contact from './views/Contact';
import Footer from './views/Footer';
import './index.css'
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";

import { backgroundPositions } from "./backgroundPositions";
import useScrollSection from "./useScrollSection";

function App() {
  const sectionIds = ["Hero", "Reserve", "Courts", "PriceList", "Contact"];
  const currentSection = useScrollSection(sectionIds);

  const { topBlob, bottomBlob } = backgroundPositions[currentSection] || backgroundPositions.Hero;

  useEffect(() => {
    const hero = document.getElementById("Navbar");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="App relative bg-white overflow-hidden min-h-screen font-['Poppins',sans-serif]">
      <motion.div
        className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] pointer-events-none z-0"
        animate={topBlob}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <motion.div
        className="w-[50vw] h-[50vw] bg-light-green rounded-full fixed blur-[200px] pointer-events-none z-0"
        animate={bottomBlob}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div id="Navbar"><Navbar /></div>
      <div id="Hero"><Hero /></div>
      <div id="Reserve"><Reserve /></div>
      <div id="Courts"><Courts /></div>
      <div id="PriceList"><PriceList /></div>
      <div id="Contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
