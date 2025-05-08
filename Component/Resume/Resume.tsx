import React from 'react';

const Resume = () => {
  const education = [
    {
      title: 'HIGH SCHOOL',
      institution: 'KMHSS KARULAI',
      years: '2016 to 2019',
      description:
        'KMHSS KARULAI | 2016 to 2019 – I successfully completed my high school education with a strong academic foundation. During this time, I developed essential skills in communication, critical thinking, and teamwork. This period played a vital role in shaping my personal and academic growth, preparing me for future challenges and opportunities.',
    },
    {
      title: 'HIGHER SECONDARY',
      institution: 'MPMHSS CHUNGATHARA',
      years: '2015 to 2018',
      description:
        'MPMHSS CHUNGATHARA | 2015 to 2018 – I completed my higher secondary education in the Humanities stream, which broadened my understanding of society, history, politics, and human behavior. This academic journey helped me develop strong analytical thinking, communication skills, and a deeper awareness of social and cultural contexts—qualities that are essential for both academic and professional growth.',
    },
    {
      title: 'GRAPHIC DESIGN COURSE',
      institution: 'XYZ DESIGN ACADEMY',
      years: '2019 to 2020',
      description:
        'XYZ DESIGN ACADEMY | 2019 to 2020 – I completed an intensive professional graphic design course that equipped me with the skills and techniques needed to excel in the design industry. Throughout the program, I mastered software like Adobe Photoshop, Illustrator, and InDesign, while gaining a deep understanding of design principles such as color theory, typography, and layout composition. The course helped me develop a professional portfolio that showcases my creative abilities and design expertise.',
    },
    {
      title: 'GRAPHIC DESIGN SKILLS',
      institution: 'N/A',
      years: 'Ongoing',
      description:
        'With a focus on continuous improvement, I have honed a variety of graphic design skills, including but not limited to: brand identity creation, logo design, digital illustrations, print media design, and web design. Additionally, I have expertise in the use of design tools such as Adobe Creative Suite (Photoshop, Illustrator, InDesign), Sketch, and Figma. My strong eye for detail, creativity, and understanding of design trends allows me to deliver visually appealing and impactful design solutions.',
    },
  ];

  return (
    <>
      <div className="text-center px-4 py-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          MY <span className="bg-gradient-to-r from-indigo-400 to-pink-500 text-transparent bg-clip-text">Resume</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
        You're at the right place! Whether your project is large or small, I'm here to bring your creative vision to life.
        Below you'll find everything you need to know about me as a <span className="font-medium text-white">Graphic Designer</span>.
        </p>
      </div>

      <div className="min-h-screen flex justify-center items-center px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg max-w-[520px] mx-auto border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-indigo-500 hover:shadow-indigo-500/40"
            >        
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-rose-500 text-transparent bg-clip-text inline-block w-fit">
                {item.title}
              </h2>
              <p className="text-sm text-gray-400 mb-1">
                <span className="font-medium text-white">{item.institution}</span> | {item.years}
              </p>
              <p className="mt-2 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-xl md:text-2xl font-medium text-gray-300 leading-relaxed mt-8 px-4 md:px-0 max-w-2xl mx-auto">
        Almost 77% of businesses worldwide have already partnered with the best graphic designers in the industry, 
        and this growing trend is here to stay. <span className="text-indigo-400 font-semibold">What are you waiting for</span> 
        to bring your vision to life?
      </p>
    </>
    
  );
};

export default Resume;