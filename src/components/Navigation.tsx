
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-royal-maroon/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">👑</span>
            <span className="text-royal-lightGold font-serif font-bold text-xl">
              Ashoka the Great
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-royal-lightGold transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-royal-lightGold transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('timeline')}
              className="text-white hover:text-royal-lightGold transition-colors duration-200"
            >
              Timeline
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="text-white hover:text-royal-lightGold transition-colors duration-200"
            >
              Impact
            </button>
            <button 
              onClick={() => scrollToSection('stories')}
              className="text-white hover:text-royal-lightGold transition-colors duration-200"
            >
              Stories
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-royal-lightGold transition-colors duration-200"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('references')}
              className="text-white hover:text-royal-lightGold transition-colors duration-200"
            >
              References
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-royal-lightGold transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-royal-maroon/95 backdrop-blur-sm border-t border-royal-gold/30">
            <div className="px-4 py-2 space-y-2">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left py-2 text-white hover:text-royal-lightGold transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left py-2 text-white hover:text-royal-lightGold transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('timeline')}
                className="block w-full text-left py-2 text-white hover:text-royal-lightGold transition-colors duration-200"
              >
                Timeline
              </button>
              <button 
                onClick={() => scrollToSection('impact')}
                className="block w-full text-left py-2 text-white hover:text-royal-lightGold transition-colors duration-200"
              >
                Impact
              </button>
              <button 
                onClick={() => scrollToSection('stories')}
                className="block w-full text-left py-2 text-white hover:text-royal-lightGold transition-colors duration-200"
              >
                Stories
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left py-2 text-white hover:text-royal-lightGold transition-colors duration-200"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('references')}
                className="block w-full text-left py-2 text-white hover:text-royal-lightGold transition-colors duration-200"
              >
                References
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
