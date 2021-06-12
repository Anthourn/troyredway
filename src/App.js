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

function App() {
  return (
    <>
    <NavBar/>
    <AboutMe/>
    <Projects/>
    </>
  );
}

export default App;
