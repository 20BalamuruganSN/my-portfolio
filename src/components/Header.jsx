import React, { useState } from 'react';

const Header = ({ activeSection, onSectionChange, onShowResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            BALA MURUGAN
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium transition-all duration-300 relative ${
                  activeSection === item.id 
                    ? 'text-primary font-semibold' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Resume Button */}
          <button 
            onClick={onShowResume}
            className="btn-primary hidden md:flex items-center gap-2"
          >
            <span>📄</span>
            Resume
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-primary text-white font-semibold' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={onShowResume}
                className="btn-primary w-full justify-center mt-2"
              >
                <span>📄</span>
                View Resume
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;