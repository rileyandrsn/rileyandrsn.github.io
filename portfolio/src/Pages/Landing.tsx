import React from 'react';
import Rotating_Globe from './Resources/compressed_video.mp4';
import './Resources/app.css';
import { ReactTyped } from 'react-typed';

function Landing(){
    return(
    <main className='main'> 
        <section className='introText'>
          <ReactTyped
              strings={['Hey,',' I\'m Riley Anderson ']}
              typeSpeed={100}
              backSpeed={0}
          />
        </section>
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