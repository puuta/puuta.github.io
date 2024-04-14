import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.scss';
import FrontPage from './pages/FrontPage';
import AboutPage from './pages/AboutPage';
import SydanpuuPage from './pages/SydanpuuPage';
import Header from './components/Header';

function App() {
  return (
    <>
    
      <Router>
        <Header />
        <div className='app'>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sydanpuu" element={<SydanpuuPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;