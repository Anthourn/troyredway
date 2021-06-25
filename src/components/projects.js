import react from 'react'


const Projects = () => {
    return(
        <>
        <h3>Projects</h3>
        <div className = 'projects'>

        <div className = 'card' style={{backgroundImage: `url("https://geekireland.com/wp-content/uploads/2019/05/Avengers-logo-game.jpg")`}} >
       <div className = 'card-content'>
       <h2 className = 'card-title'> Movies2Comics</h2>
       <p className = 'card-body'> Fan of the MCU? find the comics your favorite characters originated in.
       Built with with functional react, MongoDB, Express (MERN) and marvel API.
       <br/>
       <img className='thumbnail' src="https://img.icons8.com/nolan/64/react-native.png" alt = 'react'/>
       <img className='tiny' src= 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'/></p>
       <a href = 'https://blooming-taiga-25990.herokuapp.com/' target="_blank" className = 'button'>Live</a>
       <a href = 'https://github.com/Anthourn/avengers' target="_blank" className = 'button'>Repo</a>
       </div>

       </div>

       <div  className = 'card' style={{backgroundImage: `url("https://pm1.narvii.com/7104/f1e0477e989ff43607193360191c0084820140d7r1-1241-704v2_hq.jpg")`}} >
       <div className = 'card-content'>
       <h2 className = 'card-title'> Spamazon</h2>
       <p className = 'card-body'>
       Shopping app created in collaboration, using React and D'jango with Postgress for DB

        <br/>
        <img className='thumbnail' src="https://img.icons8.com/nolan/64/react-native.png" alt = 'react'/>
        <img className='' src="https://img.icons8.com/color/48/000000/django.png" alt = 'Django'/>
        <img className='thumbnail'src="https://img.icons8.com/color/48/000000/postgreesql.png" alt = 'PostgreSQL'/></p>
        <div className= 'project-links'>
       <a href = 'https://spamazon-ga.herokuapp.com/' target="_blank" rel="noopener noreferrer" className = 'button'>Live </a>
       <a href = 'https://github.com/Anthourn/spamazon-frontend'  target="_blank" rel="noopener noreferrer" className = 'button'>Repo </a>
       </div>
       </div>
       </div>

       <div  className = 'card' style={{backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/DYa2CX8vaVT5MHsdD7subP.jpg")`}} >
       <div className = 'card-content'>
       <h2 className = 'card-title'> Apex gun guide</h2>
       <p className = 'card-body'> A mini wiki for weapons in the apex, built with express and MongoDB </p>
       <img className='thumbnail' src= 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg'/>
       <a href = 'https://nxt-big-thing.herokuapp.com/guns' target="_blank" className = 'button'>Live</a>
       <a href = 'https://github.com/Anthourn/Proj2' target="_blank" className = 'button'>Repo</a>
       </div>
       </div>

        </div>
        </>
    )
}

export default Projects
