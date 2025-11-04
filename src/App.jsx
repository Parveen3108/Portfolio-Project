import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './component/Contact'
import Header from './component/Header'
import Main from './component/Main'
import Project from './component/Project'
import Skills from './component/Skills'

function App() {

  return (
    <div className="px-10 bg-indigo-950 text-white min-h-screen">
    <BrowserRouter>
      <Header/>
       <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>

    
      
       
    </div>
  )
}

export default App
