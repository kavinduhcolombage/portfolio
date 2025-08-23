const Navbar = () => {
  return (
    <nav className="bg-black border-b-4 border-transparent relative">
      <div className="absolute left-0 right-0 top-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 tracking-wide">
          
        </h1>
        <ul className="flex space-x-8">
          <li>
            <a href="#about" className="text-gray-200 hover:text-purple-400 transition font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-200 hover:text-blue-400 transition font-medium">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-200 hover:text-purple-400 transition font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-200 hover:text-blue-400 transition font-medium">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;