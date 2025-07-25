"use client";
import { useState } from "react";
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'motion/react';

const style={
  borderImage: 'linear-gradient(to right, #6366f1, #ec4899)',
  borderImageSlice: 1,
}

const Contact = () => {

  const {theme} = useTheme();
  const [result, setResult] = useState("");

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "6d64b1c4-3f7a-4b0b-9023-d72ba702ee7e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="contact" 
      className={`w-full px-[12%] py-10 scroll-mt-20 ${theme==="Dark"?'bg-black':'bg-white'}`}
      suppressHydrationWarning
    >

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-sm md:text-base uppercase tracking-widest text-cyan-400 mb-4"
      >
        Connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-4"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className={`text-center max-w-2xl mx-auto mt-4 mb-10 ${theme==="Dark"?'text-gray-300':'text-black'} leading-relaxed text-sm md:text-base`}
      >
        I’d love to hear from you! If you have any questions, comments, or feedback, please use the form below to reach out.
      </motion.p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-2xl shadow-lg">

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 w-full rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 border-2"
          style={style}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 w-full rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 border-2"
          style={style}
        />
      </div>

      <textarea
        name="message"
        rows={6}
        placeholder="Your Message"
        required
        className="p-4 w-full rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-6 border-2"
        style={style}
      ></textarea>

      <button
        type="submit"
        className="flex items-center gap-3 mx-auto px-6 cursor-pointer py-3 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition duration-300"
      >
        Submit Now
        <img src="right-arrow-bold-dark.png" alt="Send" className="w-4 h-4" />
      </button>

      <p className="mt-4 text-white text-center">{result}</p>
      </form>


    </motion.div>
  )
}

export default Contact;