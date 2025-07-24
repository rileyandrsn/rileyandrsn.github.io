import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Projects from './Pages/Projects';
import Nav from './Pages/Nav';
import Landing from './Pages/Landing';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import portfolioImage from './Pages/Resources/portfolio.png';
export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<><Nav /></>}>
                  <Route index element={<Landing />} />
                  <Route path="projects" element={<Projects />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
