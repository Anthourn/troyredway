import react from 'react'
import Pdf from '../Resume_2021.pdf'
const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light " style={{background:'#E3B499', height:'5em'}}  >
  <div class="container-fluid">
    <h1 className = 'navbar-brand'>Troy Redway</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active"  target="_blank" rel="noopener noreferrer"href = 'https://github.com/Anthourn'>Github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"target="_blank" aria-current="page" rel="noopener noreferrer" href = 'https://www.linkedin.com/in/troyredway/'> Linkedin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href = {Pdf} target="_blank"> Resume</a>
        </li>


      </ul>

    </div>
  </div>
</nav>







    )
}

export default NavBar
