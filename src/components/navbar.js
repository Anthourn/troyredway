import react from 'react'
import Pdf from '../Resume_2021.pdf'
const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h1 className = 'navbar-brand'>Troy Redway</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" target="_blank" rel="noopener noreferrer"href = 'https://github.com/Anthourn'>Github</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"target="_blank" rel="noopener noreferrer" href = 'https://www.linkedin.com/in/troyredway/'> Linkedin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"href = {Pdf} target="_blank"> Resume</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

      </ul>

    </div>
  </div>
</nav>







    )
}

export default NavBar
