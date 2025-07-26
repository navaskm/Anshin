import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const Skills = () => {

  const {theme} = useTheme();

  const skills = [
    {
      name: 'Adobe Photoshop',
      icon: "photoshop.png",
      description: 'Skilled in advanced photo editing, retouching, and visual compositions using Photoshop.',
    },
    {
      name: 'Adobe Illustrator',
      icon: "illustrator.png",
      description: 'Expert in vector illustrations, logo design, and custom typography with Illustrator.',
    },
    {
      name: 'Adobe InDesign',
      icon: "indesign.png",
      description: 'Proficient in layout design for brochures, magazines, and digital publishing using InDesign.',
    },
  ];

  return (
    <motion.div
      className={`${theme === "Dark" ? 'bg-black' : 'bg-white'} py-16 px-6 text-center`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
    <motion.h1
      className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      MY SKILLS
    </motion.h1>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-gradient-to-br from-lime-500 via-emerald-500 to-teal-600 rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={skill.icon} alt={skill.name} className='mb-4 rounded-2xl w-[120px] mx-auto md:w-auto md:ml-auto md:mr-0'/>
          <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
          <p className="text-white text-sm leading-relaxed">{skill.description}</p>
        </motion.div>
      ))}
    </motion.div>

    <p id='contact'></p>
    </motion.div>

  );
};

export default Skills;

// flex justify-center mb-4 rounded-2xl w-30 md:w-auto 
 //         ml-[35%] md:ml-auto