const Navbar = () => {
  return (
    <nav className="bg-black border-b-4 border-transparent relative">
      <div className="absolute left-0 right-0 top-full h-1"></div>
      <div className="container mx-auto flex items-center justify-between py-8 px-6">
        <h1 className="text-3xl font-bold text-white bg-clip-text">
          Kavindu's Portfolio
        </h1>
        <ul className="flex space-x-8 text-lg text-white">
          <li>
            <a href="#about" className="hover:text-purple-400 transition font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400 transition font-medium">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-400 transition font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition font-medium">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;