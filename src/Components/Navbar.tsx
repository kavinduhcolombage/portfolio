const Navbar = () => {
  return (
    <nav className="border-b-4 border-transparent relative">
      <div className="flex items-center justify-between py-8 px-6 mx-8 max-[400px]:mx-1">
        <h1 className="text-3xl max-[900px]:text-2xl font-bold text-white bg-clip-text">
          Kavindu's Portfolio
        </h1>
        <ul className="flex space-x-8 max-[700px]:hidden [&>*]:text-lg max-[900px]:[&>*]:text-base [&>*]:text-white ">
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