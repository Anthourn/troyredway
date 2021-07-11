import react from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AboutMe from './components/aboutme'
import NavBar from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'

function App() {
  return (
    <div className= 'container-fluid'>
    <NavBar/>
    <Projects/>
    <AboutMe/>
    <Skills/>
    <Footer/>
    </div>
  );
}

export default App;
