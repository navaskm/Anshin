import Logo from "../Logo/Logo"

const Footer = () => {

  return (
    <div className="mt-20">

      <div className="text-center">

        <Logo/>

        <div className="w-max flex items-center gap-2 mx-auto text-white">
          <img src='mail_icon_dark.png' alt='' className="w-6"/>
          <a href="mailto:anshinbinu@gmail.com" className="hover:underline">
            anshinbinu@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t-2 border-gray-400 mx-[10%] mt-12 py-6 text-white" style={{
        borderImage: 'linear-gradient(to right, #6366f1, #ec4899)',
        borderImageSlice: 1,
      }}>
        <p>© 2025 Anshin TP. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://instagram.com/Anshi_editing">
              <img src="instagram.png" alt="Instagram" className="w-10"/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Footer;