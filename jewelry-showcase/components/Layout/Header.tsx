'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h2
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled
                  ? 'text-gradient-gold'
                  : 'text-white drop-shadow-lg'
              }`}
            >
              LUXE
            </h2>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            {['Collections', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className={`font-medium transition-all duration-300 hover:text-gold-500 relative group ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
              isScrolled
                ? 'bg-gold-500 text-white hover:bg-gold-600'
                : 'bg-white text-gold-600 hover:bg-gold-50'
            }`}
          >
            Inquire Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
