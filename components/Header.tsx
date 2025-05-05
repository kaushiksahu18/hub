"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight">
              <span className={`transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                Harmony
              </span>
              <span className={`transition-colors duration-300 ${isScrolled ? 'text-accent' : 'text-accent'}`}>
                Hub
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'Instructors', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 hover:text-accent ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105">
              Book a Lesson
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
            <div className="flex flex-col gap-4">
              {['Home', 'Services', 'Instructors', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-medium text-gray-800 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 mt-2">
                Book a Lesson
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;