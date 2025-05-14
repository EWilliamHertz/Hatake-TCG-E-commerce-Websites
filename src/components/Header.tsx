import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoonIcon, SunIcon } from 'lucide-react';
interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export const Header: React.FC<HeaderProps> = ({
  darkMode,
  toggleDarkMode
}) => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className="sticky top-0 z-50 bg-white dark:bg-[#1a1a1a] shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-primary">
          Hatake TCG
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}>
            Home
          </Link>
          <Link to="/gallery" className={`font-medium transition-colors ${isActive('/gallery') ? 'text-primary' : 'hover:text-primary'}`}>
            Gallery
          </Link>
          <Link to="/about" className={`font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}>
            About
          </Link>
          <Link to="/partnership" className={`font-medium transition-colors ${isActive('/partnership') ? 'text-primary' : 'hover:text-primary'}`}>
            Partnership
          </Link>
          <Link to="/retailer" className={`font-medium transition-colors ${isActive('/retailer') ? 'text-primary' : 'hover:text-primary'}`}>
            Retailer Info
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle Dark Mode">
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          {/* Mobile menu button - to be expanded in future iterations */}
          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>;
};