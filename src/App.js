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
        <Route path="/tportfolio/" element={<HomePage />} />
        <Route path="/tportfolio/contact" element={<ContactPage />} />
        <Route path="/tportfolio/experience" element={<Experience />} />
        <Route path="/tportfolio/projects" element={<Projects />} />
        <Route path="/tportfolio/skills" element={<Skills />} />
      </Routes>

    
    
  );
}

export default App;
