import React from 'react';
import './Resources/home.css';
import portfolioImage from './Resources/portfolio.png';

function Aside() {
  return (

    <aside>
    <img src={portfolioImage} width={300} height={350}/>
    <h3>Riley Anderson</h3>
    <h4>Computer science student at Arizona State University</h4>
    <ul>
      <li>Puyallup, WA and Tempe, AZ</li>
      <li>Email</li>
      <li>LinkedIn</li>
      <li>Github</li>
    </ul>
  </aside>

  );
}

export default Aside;
