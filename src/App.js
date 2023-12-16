import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ContactPage } from "./Pages/ContactPage";
import { HomePage } from "./Pages/HomePage";
import {Experience} from './Pages/Experience'
import {Projects} from './component/Projects'
import {Skills} from './component/Skills'


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>

    
    
  );
}

export default App;
