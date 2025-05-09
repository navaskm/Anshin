const AboutMe = () => {

  const array = [
    {
      heading:"10+",
      desc:'Projects Completed'
    },
    {
      heading:"13+",
      desc:'Happy Clients'
    },
    {
      heading:"100%",
      desc:'Positive Revies'
    },
    {
      heading:"2",
      desc:'Experience'
    },
  ]

  return (
    <>
      <div id="about" className="min-h-screen  text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12 pt-0 mt-0 pb-0 mb-0">

        {/* image container */}
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src="/binu4.jpg"
            alt="binu"
            className="w-[500px] h-[500px] object-cover shadow-lg"
          />
        </div>

        {/* content container */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-400">
            <span className="text-white">WHO</span> AM I
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            I’m <span className="text-pink-400 font-semibold">Anshin</span>, a freelance graphic designer based in Malappuram. I’m a passionate creative professional dedicated to transforming ideas into compelling visual designs.
            <br /><br />
            I recently completed a <span className="text-pink-400 font-semibold">professional graphic design course,</span> which sharpened my creative skills and deepened my understanding of visual communication. I specialize in branding, visual identity, and digital graphics that help businesses stand out and communicate effectively. Whether it’s crafting eye-catching logos, designing engaging social media content, or building brand consistency, I’m committed to delivering design solutions that make a lasting impact.
          </p>
        </div>

      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-y-10 gap-x-6 px-6 py-10">
        {array.map((element, index) => (
          <div className="text-center w-40 sm:w-48 md:m-10" key={index}>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-green-500 tracking-tight font-sans">
              {element.heading}
            </h2>
            <h3 id='resume' className="text-base sm:text-lg text-green-200 font-medium mt-2 font-sans">
              {element.desc}
            </h3>
          </div>
        ))}
        <p id='resume1'></p>
      </div>
    </>
  )
}

export default AboutMe;