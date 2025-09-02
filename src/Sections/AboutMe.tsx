const AboutMe = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[50vh] px-6 py-12">
      {/* Glowing stars background effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full opacity-30"></div>
        {/* Add more decorative elements if you want */}
      </div>
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-4xl max-[400px]:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 drop-shadow-lg mb-6">
          About Me
        </h2>
        <p className="text-lg max-[900px]:text-base text-gray-200 mb-6 leading-relaxed drop-shadow">
          Hi, I'm a passionate explorer of the digital universe, currently navigating the world of web development and software engineering. My journey is fueled by curiosity, creativity, and a love for building beautiful, functional experiences. Whether I'm coding late into the night or dreaming up new ideas, I strive to bring a bit of cosmic wonder to every project I touch.
        </p>
        <div className="flex flex-col items-center gap-2">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white text-sm font-semibold shadow-lg">
            🚀 Full-stack Developer
          </span>
          {/* <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 text-white text-sm font-semibold shadow-lg">
            🌌 Galaxy Theme Enthusiast
          </span>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-700 via-blue-700 to-purple-700 text-white text-sm font-semibold shadow-lg">
            💡 Always Learning & Creating
          </span> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;