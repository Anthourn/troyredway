import react from 'react'


const Projects = () => {
    return(
        <div style={{background:'#E3B499'}}>
        <h1 class="display-1">Projects</h1>
        <p> Technologies used include React JS, Firebase, Python Django MongoDB PostgresSQL and Express.</p>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src="https://i.imgur.com/jstrRHk.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'black'}}>Movies -> comics</h5>
        <p style={{color:'black'}}>Create a library of comic books, using Marvel API for data, Express back end, React Frontend, firebase  auth, MongoDB database storage </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/QYdu0Rf.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'black'}}>Spamazon</h5>
        <p style={{color:'black'}}>Shopping app created in collaborration, using D'jango back end, React front end, PostgreSQL data storage Firebase Auth</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.imgur.com/r2u4PIq.png" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 style={{color:'black'}}>Apex guide</h5>
        <p style={{color:'black'}}>Basic Wiki using JS and MongoDB</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span style={{color:'black'}} class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Projects
