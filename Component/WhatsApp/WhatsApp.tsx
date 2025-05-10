import { useTheme } from '@/context/ThemeContext';

const WhatsApp = () => {

  const {theme} = useTheme();

  return (
    <a 
      href="https://wa.me/9188554849?text=Hello%20there!%20I%20just%20visited%20your%20portfolio%20and%20I'm%20really%20impressed%20with%20your%20graphic%20design%20work.%20I'd%20love%20to%20discuss%20a%20potential%20project%20with%20you!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={`${theme==="Dark"?'whatsapp.png':'whatsapp1.png'}`} alt="Chat on WhatsApp" className='fixed bottom-0 right-0 z-50 cursor-pointer w-10 h-10 rounded-2xl md:bottom-5 md:right-5 md:w-20 md:h-20'/>
    </a>
  )
}

export default WhatsApp;