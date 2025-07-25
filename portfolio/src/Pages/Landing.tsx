import React, { useState } from 'react';
import Rotating_Globe from './Resources/compressed_video.mp4';
import './Resources/app.css';
import { ReactTyped } from 'react-typed';
import portfolioImage from './Resources/portfolio.png';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import linkedinLogo from './Resources/linkedin.png';
import githubLogo from './Resources/github.png';
import email from './Resources/email.png';
function Landing(){
    const [showDetails, setShowDetails] = useState(false);
    return(
    <main className='main'> 
        <section className='left-column'>

          <article className='introText'>
            <ReactTyped
                strings={["Hey, I'm Riley Anderson"]}
                typeSpeed={75}
                backSpeed={0}
                onComplete={() => setShowDetails(true)}
            />
          </article>
          {showDetails && (
            <>
              <h2 className='subtitle fade-in'>Computer Science Student at Arizona State University</h2>
              <a className='resumeBtn fade-in' href='/sample.pdf' download>Resume</a>
            </>
          )}
        </section>

        <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <video className='globeVid' autoPlay muted loop playsInline id="bg-video">
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
          <section className='aboutSection'>
            <h2 className='aboutSub'>1  &gt; about me</h2>
            <p className='aboutP'>Hi, I’m Riley Anderson — a Computer Science student at Arizona State University with a passion for <br />
                                  building things that work and breaking  things to understand how they work. I’m especially interested<br /> 
                                  in cybersecurity, software engineering, and embedded systems. I enjoy coding in Python, Java, C, and C++,<br /> 
                                  and I’m currently pursuing the CompTIA Security+ certification after completing the Google Cybersecurity<br /> 
                                  Certificate. Whether I’m developing full-stack web apps, exploring low-level programming, or tackling<br /> 
                                  complex math problems, I’m always driven by curiosity and a desire to grow. I’m actively seeking<br /> 
                                  opportunities to learn, collaborate, and contribute through internships or real-world projects.</p>
          </section>
          <section id='projects' className='projectsSection'>
          <h2 className='projectsSub'>2  &gt; projects</h2>
          <ul className='project-links'>
            <li className='python link'>Python</li>
            <li className='java link'>Java</li>
            <li className='c link'>C</li>
            <li className='matlab link'>MATLAB</li>
          </ul>
          </section>
    </main>
    );
}

export default Landing;