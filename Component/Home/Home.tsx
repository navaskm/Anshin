'use client';
import { useTheme } from '@/context/ThemeContext';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const HomeDetails = () => {
  const { theme } = useTheme();

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
    <div className={`${theme === 'Dark' ? 'bg-black' : 'bg-white'} min-h-screen flex flex-col md:flex-row items-center justify-center px-4 gap-10 pb-0 mb-0`}>
      
      {/* Animated Text Content */}
      <motion.div
        className="flex-1 text-center md:text-left pl-0 pt-25 md:pl-20 md:pt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className={`text-sm font-medium ${theme === 'Dark' ? 'text-white' : 'text-black'} uppercase tracking-widest mb-2`}>
          Hello! I'm
        </h2>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          FREELANCE GRAPHIC DESIGNER
        </motion.h1>

        <p className={`text-lg sm:text-xl ${theme === 'Dark' ? 'text-white' : 'text-black'} mb-2`}>
          BASED IN <span className="font-semibold text-indigo-600">MALAPPURAM</span>
        </p>

        <p id='about1' className={`max-w-xl ${theme === 'Dark' ? 'text-white' : 'text-black'} text-base sm:text-lg mt-4 mx-auto md:mx-0 h-[100px] md:w-[100px] relative sm:whitespace-nowrap`}>
          Fueling Your Brand with&nbsp;
          <span className="font-semibold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            {text}
          </span>
          <Cursor cursorStyle="|" />
        </p>
      </motion.div>

      {/* Animated Image */}
      <motion.div
        className="flex-1 mt-0 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <img
          src={theme === 'Dark' ? 'binu1.jpg' : 'binu2.jpg'}
          alt="binu"
          className="h-50 w-50 md:h-140 md:w-110 object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default HomeDetails;