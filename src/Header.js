import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${id} not found`);
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
    document.documentElement.classList.toggle('light-mode');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <style>{`
        .header {
          background-color: var(--primary-purple);
          padding: 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

       

       nav {
  flex: 1;
  display: flex;
  justify-content: center;
}
        .nav-list {
          list-style: none;
          display: flex;
          gap: 40px;
          color: #ffffff;
          margin: 0;
          padding: 0;
         

        }

        .nav-list li {
          cursor: pointer;
          transition: color 0.3s ease;
          white-space: nowrap;
           
        }

        .nav-list li:hover {
          color: var(--accent-blue);
        }

        .theme-toggle {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          
        }

        .hamburger-menu {
          display: none;
          cursor: pointer;
          color: white;
          padding: 0.5rem;
        }

        .mobile-nav {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .header-container {
            padding: 0.3rem;
          }

          .nav-list {
            display: none;
          }

          .hamburger-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .mobile-nav {
            display: block;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--primary-purple, #6B46C1);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
          }

          .mobile-nav.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .mobile-nav-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .mobile-nav-list li {
            padding: 1rem 1.5rem;
            color: white;
            cursor: pointer;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: background-color 0.3s ease;
          }

          .mobile-nav-list li:hover {
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--accent-blue, #60A5FA);
          }

          .mobile-nav-list li:last-child {
            border-bottom: none;
          }
        }

        /* Tablet Styles */
        @media (max-width: 1024px) and (min-width: 769px) {
          .nav-list {
            gap: 20px;
          }
        }
      `}</style>

      <div className={isLightMode ? 'header-container light-mode' : 'header-container'}>
    
        
        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-list">
            <li onClick={() => handleScroll('about-me')}>About Me</li>
            <li onClick={() => handleScroll('skills')}>Skills</li>
            <li onClick={() => handleScroll('projects')}>Projects</li>
            <li onClick={() => handleScroll('experience')}>Experience</li>
            <li onClick={() => handleScroll('contact')}>Contact</li>
          </ul>
        </nav>

        {/* Desktop Theme Toggle */}
        <span className="theme-toggle" onClick={toggleTheme}>
          <img 
            width="30" 
            height="30"  
            src="https://img.icons8.com/external-line-lima-studio/64/external-moon-basic-user-interface-line-lima-studio.png"
            style={{ filter: 'brightness(0) invert(1)' }}
            alt="theme-toggle"
          />
        </span>

        {/* Mobile Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li onClick={() => handleScroll('about-me')}>About Me</li>
          <li onClick={() => handleScroll('skills')}>Skills</li>
          <li onClick={() => handleScroll('projects')}>Projects</li>
          <li onClick={() => handleScroll('experience')}>Experience</li>
          <li onClick={() => handleScroll('contact')}>Contact</li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Header;