import React, { useEffect, useState } from "react";

const name = "Kavindu Hansana";
const summary = "A passionate developer specializing in modern web technologies, always eager to learn and create impactful solutions.";

const AboutMe: React.FC = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(name.slice(0, i + 1));
      i++;
      if (i === name.length) clearInterval(timer);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-black px-6 py-12">
      <img
        src="/your-image.jpg"
        alt="Kavindu Hansana"
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-gradient-to-r from-blue-500 to-purple-500 mb-6 md:mb-0 md:mr-10"
      />
      <div className="text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 tracking-wide mb-4">
          {displayed}
          <span className="animate-pulse text-purple-400">|</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-xl">{summary}</p>
      </div>
    </section>
  );
};

export default AboutMe;