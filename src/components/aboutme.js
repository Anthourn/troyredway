import react from 'react'

const AboutMe = () => {
    return (
        <div class="container">
        <h1 class="display-2">The man behind the Screen</h1>
      <div class="row align-items-start">
        <div class="col">
        <figure class="figure">
            <img src="https://i.imgur.com/7Cwnnw3.jpg" class="figure-img img-fluid rounded" alt="..."/>
            <figcaption class="figure-caption">Seeing myself excel at your company</figcaption>
            </figure>
        </div>
        <div class="col" id = 'bio'>
            <p class = 'lead' >
                I get excited by the idea of creating solutions to improve the lives of others.
                Web development is a great way to mix that passion with  my ability to role with the punches. A mutable nature keeps me afloat even in the stormiest seas.
                </p>
            <blockquote class="blockquote">
                <p>Todays junior, tomorrows leader, eternity's student.</p>
            </blockquote>
        </div>
        <div class="col">
          <p> Todays junior, tomorrows leader, eternity's student.</p>
        </div>
      </div>
      </div>
    )
}

export default AboutMe
