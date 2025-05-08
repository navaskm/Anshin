"use client";
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const HomeDetails = () => {

  const [text] = useTypewriter({
    words: [
      'Logos That Speak Louder Than Words.',
      'Designs That Tell Your Story.',
      'Bringing Ideas to Life Visually.',
      'Creating Impact Through Design.'
    ],
    loop: 0, 
    delaySpeed: 1000,
  });
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 gap-10 pb-0 mb-0">
      
      {/* content container */}
      <div className="flex-1 text-center md:text-left pl-0 pt-25 md:pl-20 md:pt-0">
        <h2 className="text-sm font-medium text-white uppercase tracking-widest mb-2">Hello! I'm</h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-4">
          FREELANCE GRAPHIC DESIGNER
        </h1>
        <p className="text-lg sm:text-xl text-white mb-2">
          BASED IN <span className="font-semibold text-indigo-600">MALAPPURAM</span>
        </p>
        <p className="max-w-xl text-white text-base sm:text-lg mt-4 mx-auto md:mx-0 h-[100px] md:w-[100px] sm:whitespace-nowrap relative">
          Fueling Your Brand with&nbsp;
          <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorStyle='|' />
        </p>


      </div>

      {/* image container */}
      <div className="flex-1 md:mt-0 flex justify-center">
        <img src="binu1.jpg" alt="binu" className="h-50 w-50 md:h-140 md:w-110 object-cover" />
      </div>
    </div>
  )
}

export default HomeDetails;