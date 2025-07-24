import React, { useState } from 'react';
import Rotating_Globe from './Resources/compressed_video.mp4';
import './Resources/app.css';
import { ReactTyped } from 'react-typed';
import portfolioImage from './Resources/portfolio.png';
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
function Landing(){
    const [showDetails, setShowDetails] = useState(false);
    return(
    <main className='main'> 
        {/* Left column: intro text and subtitle */}
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
        {/* Right column: globe video */}
        <section style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <video className='globeVid' autoPlay muted loop playsInline id="bg-video">
            <source src={Rotating_Globe} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

  
    </main>
    );
}

export default Landing;