import React from 'react';
import Rotating_Globe from './Resources/compressed_video.mp4';
function Landing(){
    return(
    <main> 
        <article>
         <h2>About Me</h2> 
         <p>I am currently a sophomore at Arizona State University pursuing a 
            Bachelors of Science in Computer Science. I have a strong 
            interest in software engineering and cybersecurity</p>
        </article>
        <section>
        <video autoPlay muted loop playsInline id="bg-video">
        <source src={Rotating_Globe} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        </section>
    </main>
    );
}

export default Landing;