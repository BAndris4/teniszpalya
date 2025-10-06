import Navbar from './components/Navbar';
import './index.css'
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";

function App() {

  return (
    <div className="App relative min-h-screen bg-white">
      <Navbar></Navbar>
      <div className='w-[50vw] h-[50vw] bg-light-green fixed top-[-45vw] left-[25vw] blur-[200px] pointer-events-none z-0'></div>
      <div className='w-[50vw] h-[50vw] bg-light-green fixed top-[70vh] right-[-20vw] blur-[200px] pointer-events-none z-0'></div>

    </div>
  )
}

export default App
