import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

const services = [
  {
    title: 'BROCHURES',
    description:
      'Designing visually compelling brochures that communicate your message clearly and leave a lasting impression on your audience.',
  },
  {
    title: 'LOGO',
    description:
      'Creating unique and memorable logos that reflect your brand’s identity and establish strong visual recognition.',
  },
  {
    title: 'SOCIAL MEDIA POSTER',
    description:
      'Crafting eye-catching posters tailored for platforms like Instagram, Facebook, and more to boost engagement and brand visibility.',
  },
  {
    title: 'FILM POSTER',
    description:
      'Designing cinematic and impactful film posters that capture the essence of your movie and attract viewers.',
  },
  {
    title: 'DIGITAL CARDS',
    description:
      'Creating stylish and modern digital cards for events, invitations, and greetings that stand out in any inbox.',
  },
  {
    title: 'TITLE DESIGNS',
    description:
      'Designing creative and impactful title graphics that enhance your visual content for videos, presentations, or branding.',
  },
  {
    title: 'PHOTO EDITING',
    description:
      'Enhancing, retouching, and manipulating photos to meet professional standards while preserving natural beauty and detail.',
  },
  {
    title: 'BRANDING',
    description:
      'Building complete brand identity systems that include logos, color palettes, typography, and visual elements for consistent storytelling.',
  },
];

const Services = () => {

  const {theme} = useTheme();

  return (
    <motion.section
  className={`px-6 py-16 pt-28 ${theme === "Dark" ? ' bg-black text-white' : ' bg-white text-black'}`}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <motion.div
    className="text-center mb-12"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-extrabold mb-4">
      PROVIDING <span className="text-green-400">SERVICES</span>
    </h2>
    <p className={`text-lg max-w-xl bg-clip-text ${theme === "Dark" ? 'bg-gradient-to-r from-green-300 to-pink-400' : 'bg-gradient-to-r from-purple-700 via-blue-600 to-green-600'} mx-auto text-center italic text-transparent`}>
      I make your ads more attractive and creative.
    </p>
  </motion.div>

  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.3
        }
      }
    }}
  >
    {services.map((service, index) => (
      <motion.div
        key={index}
        className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-400 transition duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-green-300 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-300">{service.description}</p>
      </motion.div>
    ))}
  </motion.div>

  <p id='skills'></p>
</motion.section>

  );
};

export default Services;