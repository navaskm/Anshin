const Logo = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <h1
      className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
      onClick={scrollToTop}
    >
      Anshin <span className="text-white">TP</span>
    </h1>
  )
}

export default Logo