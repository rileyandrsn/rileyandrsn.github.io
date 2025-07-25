import React, { useState } from 'react';
import Rotating_Globe from './Resources/compressed_video.mp4';
import './Resources/app.css';
import { ReactTyped } from 'react-typed';
import portfolioImage from './Resources/portfolio.jpg';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import linkedinLogo from './Resources/linkedin.png';
import githubLogo from './Resources/github.png';
import email from './Resources/email.png';
import pythonProjectImage from './Resources/PortScanSS.png';
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
              <h2 className='subtitle fade-in'>Computer Science student at Arizona State University</h2>
              <a className='resumeBtn fade-in' href='/rileyanderson_resume.pdf' download>Resume</a>
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
            <img className='portfolioImage' width={300} height={425} src={portfolioImage}/>
            <div className='portfolioImageFrame'></div>
            <h2 className='aboutSub'>&lt; 1 / &gt; about me</h2>
            <p className='aboutP'>Hi, I’m Riley Anderson — a Computer Science student at Arizona State University with a passion for <br />
                                  building things that work and breaking  things to understand how they work. I’m especially interested<br /> 
                                  in cybersecurity, software engineering, and embedded systems. I enjoy coding in Python, Java, C, and C++,<br /> 
                                  and I’m currently pursuing the CompTIA Security+ certification after completing the Google Cybersecurity<br /> 
                                  Certificate. Whether I’m developing full-stack web apps, exploring low-level programming, or tackling<br /> 
                                  complex math problems, I’m always driven by curiosity and a desire to grow. I’m actively seeking<br /> 
                                  opportunities to learn, collaborate, and contribute through internships or real-world projects.</p>
          </section>
          <section id='projects' className='projectsSection'>
          <h2 className='projectsSub'>&lt; 2 / &gt; projects</h2>
          <ul className='project-links'>
            <li className='python link active' data-filter="python">Python</li>
            <li className='java link' data-filter="java">Java</li>
            <li className='c link' data-filter="c">C</li>
            <li className='matlab link' data-filter="matlab">MATLAB</li>
          </ul>
          <figure className='petProject'>
            <img className='projectImg' src={pythonProjectImage} width={700} height={550} />
          </figure>
          <figcaption className='projectCaption'>
              <h2 className='projectSubtitle'>Port Scanner</h2>
              <h3 className='techStack'>Built with: Python</h3>
              <p className='projectDesc'>A lightweight network security tool built to scan and identify open ports on a target host. 
                This project utilizes TCP socket connections to probe a range of ports, detect their status (open/closed), 
                and optionally resolve services running on those ports. Designed for educational and diagnostic use, the 
                scanner supports customizable port ranges, multithreaded scanning for speed, and basic error handling for robustness.</p>
            </figcaption>
          </section>
          <section id='contact' className='contactSection'>
            <h2 className='contactSub'>&lt; 3 / &gt; get in touch</h2>
            <h4 className='contactP'>Feel free to reach out! Send me a direct message on LinkedIn, or send me <br/>an email with the button below, and I’ll get back to you as soon as possible.</h4>
            <a className='emailBtn fade-in' href='mailto:rileyanders.n06@gmail.com' download>Email</a>
            <h6 className='footer-tag'>Built by Riley Anderson</h6>
          </section>
    </main>
    );
}

export default Landing;