import React from 'react';
import { useState } from 'react';
import './Resources/app.css';
import Rotating_Globe from './Resources/compressed_video.mp4';
import { ReactTyped } from 'react-typed';
import linkedinLogo from './Resources/linkedin.png';
import githubLogo from './Resources/github.png';
import email from './Resources/email.png';
function Projects() {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <main>
        <section className='blog-head'>
        <h1 className='blog-sub'>I write on Medium, check<br/> out my recent article on  </h1>
        <div className='typedStrings'>
        <ReactTyped
                strings={["Cybersecurity","Software Engineering","AI","Lifting","Student Life"]}
                typeSpeed={100}
                backSpeed={200}
                loop
                onComplete={() => setShowDetails(true)}
            />
        </div>
        </section>
        <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <video className='globeVidBlog' autoPlay muted loop playsInline id="bg-video">
            <source src={Rotating_Globe} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          </section>
          <section className='socials'>
            <a className='linkedinImg' href='https://www.linkedin.com/in/riley-anderson-b2417132a/'><img height="40" width="40" src={linkedinLogo}/></a>
            <a className='githubImg' href='https://github.com/rileyandrsn'><img height="40" width="40" src={githubLogo}/></a>
            <a className='emailImg' href='mailto:rileyanders.n06@gmail.com'><img height="40" width="40" src={email}/></a>
            <div className='social-bar'></div>
          </section>
        </main>
    );
}

export default Projects;
