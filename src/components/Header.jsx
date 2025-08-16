import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="bg-base-100 p-4 shadow-md">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          LogayaStudio
        </Link>
        
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/guide" className="hover:text-primary">Guide</Link></li>
          <li><Link to="/support" className="hover:text-primary">Support</Link></li>
        </ul>
        
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className="btn btn-sm btn-outline btn-primary"
          >
            Mode {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          
          <div className="dropdown dropdown-end md:hidden">
            <label 
              tabIndex={0} 
              className="btn btn-ghost btn-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul 
              tabIndex={0} 
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/guide">Guide</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;