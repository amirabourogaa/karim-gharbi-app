import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for open/close
import logo from '../../assets/logo.png'
import './navbar.css'
const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className={`fixed w-full top-0 left-0 z-50 p-4 transition-all duration-500 ${
      isScrolled ? 'bg-white  shadow-lg' : 'bg-white'
    }`}
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo" className="w-48" />
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-accent text-3xl focus:outline-none"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Links */}
      <div
        className={`${
          isMenuOpen ? 'flex top-16' : 'hidden'
        } md:flex md:flex-row flex-col items-center md:space-x-8 absolute md:relative left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0`}
      >
        <Link to="/" className="text-accent hover:text-primary transition-colors duration-200">
          Accueil
        </Link>
        <Link to="/about" className="text-accent hover:text-primary transition-colors duration-200">
          Parcours
        </Link>
        <Link to="/portfolio" className="text-accent hover:text-primary transition-colors duration-200">
          Projets
        </Link>
        <Link to="/calendar" className="text-accent hover:text-primary transition-colors duration-200">
          Calendrier
        </Link>
        <Link to="/contact" className="text-accent hover:text-primary transition-colors duration-200">
          Contact
        </Link>
      </div>
    </div>
  </motion.nav>

  );
};

export default Navbar;
