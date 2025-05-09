'use client'
import React, { useState } from 'react';
import {motion} from "framer-motion";
import { Menu, X } from 'lucide-react';
import Logo from '../Logo/Logo';

const listVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav id='home' className="bg-black border-b-2 border-transparent shadow-md fixed top-0 left-0 w-full z-50" style={{
      borderImage: 'linear-gradient(to right, #6366f1, #ec4899)',
      borderImageSlice: 1,
    }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo */}
        <Logo/>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <li className="hover:text-indigo-600 cursor-pointer list-none"><a href="#home" onClick={scrollToTop}>HOME</a></li>
          <li className="hover:text-indigo-600 cursor-pointer list-none"><a href="#about">ABOUT ME</a></li>
          <li className="hover:text-indigo-600 cursor-pointer list-none"><a href="#resume">RESUME</a></li>
          <li className="hover:text-indigo-600 cursor-pointer list-none"><a href="#services">SERVICES</a></li>
          <li className="hover:text-indigo-600 cursor-pointer list-none"><a href="#skills">SKILLS</a></li>
          <li className="hover:text-indigo-600 cursor-pointer list-none"><a href="#contact">CONTACT</a></li>
          <img src="sun_icon.png" alt="moon" className="w-6 cursor-pointer" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center space-x-4">
          <img src="sun_icon.png" alt="moon" className="w-6 cursor-pointer" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X color="white" size={24} /> : <Menu size={24} color="white" />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <>
          <motion.ul
            className="md:hidden px-4 pt-2 pb-4 space-y-2 shadow-md text-white"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">
              <a href="#home" onClick={(e) => {
                scrollToTop();
                setIsOpen(false);
              }}>HOME</a>
            </motion.li>

            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">
              <a href="#about1" onClick={()=>setIsOpen(false)}>ABOUT ME</a>
            </motion.li>

            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer list-none">
              <a href="#resume1" onClick={()=>setIsOpen(false)}>RESUME</a>
            </motion.li>

            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">
              <a href="#services" onClick={()=>setIsOpen(false)}>SERVICES</a>
            </motion.li>

            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer list-none">
              <a href="#skills" onClick={()=>setIsOpen(false)}>SKILLS</a>
            </motion.li>

            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">
              <a href="#contact" onClick={()=>setIsOpen(false)}>CONTACT</a>
            </motion.li>
          </motion.ul>
        </>
      )}
    </nav>
  )
}

export default Header;