
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbarr from './Navbarr';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';

function App() {
  return (
 
    <HashRouter>
    <Navbarr/>
    <Routes>
    
        <Route path= "/" element={<Home />} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} />
   
    </Routes>
  </HashRouter>
  );
}

export default App;
