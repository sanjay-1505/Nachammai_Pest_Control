
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";
import Navbar2 from "./Components/Navbar2";
import Footer from "./Components/Footer";



function App() {

  return (
    <>
      
      <Navbar/>
      <Navbar2/>
      <Outlet/>
      <Footer/>
       <a
      href="https://wa.me/+919791171377"
      target="#"
      rel="noopener noreferrer"
      className="fixed bottom-14 right-6 z-50 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-110"
      aria-label="WhatsApp"
      >
      <img src="/images/whatsapp.png" alt="" className="w-14 h-14 rounded-lg" />
      
      </a>
      
    </>
  )
}

export default App
