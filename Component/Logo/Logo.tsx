"use client";
import { useTheme } from '@/context/ThemeContext';

const Logo = () => {

  const {theme} = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <h1
      className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
      onClick={scrollToTop}
    >
      Anshin <span className={`${theme === "Dark"?'text-white':'text-black'}`}>TP</span>
    </h1>
  )
}

export default Logo;