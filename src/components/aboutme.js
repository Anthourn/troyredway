import react from 'react'

const AboutMe = () => {
    return (
        <div class="container">
        <h1 class="display-2">The Man Behind The Screen</h1>
      <div class="row align-items-start">
        <div class="col">
        <figure class="figure">
            <img src="https://i.imgur.com/7Cwnnw3.jpg" class="figure-img img-fluid rounded" alt="..."/>
            <figcaption class="figure-caption">Seeing myself excel at your company</figcaption>
            </figure>
        </div>
        <div class="col" id = 'bio'>
            <p class = 'lead  text-wrap' >
                I get excited by the idea of creating solutions to improve the lives of others.

                </p>
            <blockquote class="blockquote">
                <p>Todays junior, tomorrows leader, eternity's student.</p>
            </blockquote>
        </div>
        <div class="col lead">
          <p class = 'hobby'> When hes not coding this future legend is really into:
            <ul>
            <li>Anime</li>
            <li>Poetry</li>
            <li>Marvel comics</li>
            <li>Handball</li>
            </ul>
          </p>
        </div>
      </div>
      </div>
    )
}

export default AboutMe
