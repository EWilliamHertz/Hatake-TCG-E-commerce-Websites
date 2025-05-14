import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { PartnershipPage } from './pages/PartnershipPage';
import { RetailerInfoPage } from './pages/RetailerInfoPage';
import { AboutPage } from './pages/AboutPage';
export function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Check for user preference
    if (localStorage.getItem('darkMode') === 'true' || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('darkMode') === null) {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-[#1a1a1a] text-[#f4f4f4]' : 'bg-[#fff] text-[#333]'}`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/partnership" element={<PartnershipPage />} />
            <Route path="/retailer" element={<RetailerInfoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}