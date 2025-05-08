'use client'
import React, { useState } from 'react';
import {motion} from "framer-motion";
import { Menu, X } from 'lucide-react';

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
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50" id='home'>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo */}
        <h1
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
          onClick={scrollToTop}
        >
          Anshin <span className="text-black">T</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer list-none">HOME</li>
          <li className="hover:text-indigo-600 cursor-pointer list-none">ABOUT</li>
          <li className="hover:text-indigo-600 cursor-pointer list-none">SERVICES</li>
          <li className="hover:text-indigo-600 cursor-pointer list-none">CONTACT</li>
          <img src="moon_icon.png" alt="moon" className="w-6 cursor-pointer" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center space-x-4">
          <img src="moon_icon.png" alt="moon" className="w-6 cursor-pointer" />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <>
          <motion.ul
            className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">HOME</motion.li>
            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">ABOUT ME</motion.li>
            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">SERVICES</motion.li>
            <motion.li variants={itemVariants} className="hover:text-indigo-600 cursor-pointer">CONTACT</motion.li>
          </motion.ul>
        </>
      )}
    </nav>
  )
}

export default Header;