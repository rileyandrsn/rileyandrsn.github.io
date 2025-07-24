import React from 'react';
import './App.css';
import portfolioImage from './Resources/portfolio.png';

function App() {
  return (

    <aside>
    <img src={portfolioImage} width={300} height={400}/>
    <h3>Riley Anderson</h3>
    <h4>Computer science student at Arizona State University</h4>
    <ul>
      <li>Puyallup, WA and Tempe, AZ</li>
      <li>Sophomore</li>
      <li>Email</li>
      <li>LinkedIn</li>
      <li>Github</li>
    </ul>
  </aside>

  );
}

export default App;
