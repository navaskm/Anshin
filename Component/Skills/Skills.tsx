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
    <div className={`${theme==="Dark"?'bg-black':'bg-white'} py-16 px-6 text-center`}>
      <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 bg-clip-text text-transparent">
        MY SKILLS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-lime-500 via-emerald-500 to-teal-600 rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={skill.icon} alt={skill.name} className='flex justify-center mb-4 rounded-2xl'/>
            <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
            <p className="text-white text-sm leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
      <p id='contact'></p>
    </div>
  );
};

export default Skills;