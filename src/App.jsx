import React, { useRef } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx'


function App() {
  const homeRef=useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section,e) => {
e.preventDefault();
console.log(section);


    
    if(section==='home'){
      window.scrollTo({
        top: homeRef.current.offsetTop, // Scroll to the top of the referenced section
        behavior: 'smooth', // Smooth scrolling
      });
    }else if (section === 'skills') {
      window.scrollTo({
        top: skillsRef.current.offsetTop, // Scroll to the top of the referenced section
        behavior: 'smooth', // Smooth scrolling
      });
    } else if (section === 'projects') {
      window.scrollTo({
        top: projectsRef.current.offsetTop, // Scroll to the top of the referenced section
        behavior: 'smooth', // Smooth scrolling
      });
    } else if (section === 'contact') {
      window.scrollTo({
        top: contactRef.current.offsetTop, // Scroll to the top of the referenced section
        behavior: 'smooth', // Smooth scrolling
      });
      
    }
  };
  return (
<>
    <Header scrollToSection={scrollToSection}/>
   <Home homeRef={homeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />

</>
  )
}

export default App
