import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reserve from './components/Reserve';
import Courts from './components/Courts';
import PriceList from './components/PriceList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";

function App() {
  return (
    <div className="App relative bg-white overflow-hidden min-h-screen font-['Poppins',sans-serif]">
      <div className='w-[50vw] h-[50vw] bg-light-green rounded-full fixed top-[-45vw] left-[25vw] blur-[200px] pointer-events-none z-0'></div>
      <div className='w-[50vw] h-[50vw] bg-light-green rounded-full fixed top-[70vh] right-[-20vw] blur-[200px] pointer-events-none z-0'></div>
      <Navbar />
      <Hero />
      <Reserve />
      <Courts />
      <PriceList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
