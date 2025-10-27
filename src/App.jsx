import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Main from "./component/Main";
import Project from "./component/Project";
import Skills from "./component/Skills";
import About from "./component/About";

function App() {
  return (
    <div className="px-10 bg-indigo-950 text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
