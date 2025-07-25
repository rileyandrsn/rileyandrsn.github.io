import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Projects from './Pages/Blog';
import Nav from './Pages/Nav';
import Landing from './Pages/Landing';
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
