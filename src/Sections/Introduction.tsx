import React, { useEffect, useState } from "react";

const name = "Kavindu Hansana";
const summary = "Final-year Computer Science student at the University of Sri Jayewardenepura with experience in full-stack development using Java, Spring Boot, Python, and React. Skilled in building scalable web applications, with exposure to cloud computing, Docker, and Kubernetes. Strong problem-solver passionate about innovative software solutions.";

const Introduction: React.FC = () => {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<'show' | 'hide'>('show');

  useEffect(() => {
    let i = 0;
    let timer: any;
    if (phase === 'show') {
      timer = setInterval(() => {
        setDisplayed(name.slice(0, i + 1));
        i++;
        if (i > name.length) {
          clearInterval(timer);
          setTimeout(() => setPhase('hide'), 800); // Pause before hiding
        }
      }, 180);
    } else {
      i = name.length;
      timer = setInterval(() => {
        setDisplayed(name.slice(0, i - 1));
        i--;
        if (i <= 0) {
          clearInterval(timer);
          setDisplayed(""); // Ensure name is cleared before next show
          setTimeout(() => setPhase('show'), 800); // Pause before showing again
        }
      }, 120);
    }
    return () => clearInterval(timer);
  }, [phase]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] px-6 py-12 max-[400px]:py-4">
      <img
        src="/me.png"
        alt="Kavindu Hansana"
        className="h-90 max-[900px]:h-80 object-cover shadow-lg to-purple-500 mb-6 md:mb-0 mr-10 max-[900px]:mr-5 relative"
      />
      <div className="text-center md:text-left">
        <h1 className="text-5xl max-[900px]:text-4xl text-white font-bold">Hi, I'm</h1>
        <h1
          className="text-5xl max-[900px]:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 tracking-wide mb-4"
        >
          {displayed}
          {(phase === 'show' && displayed.length < name.length) && (
            <span className="animate-pulse text-blue-700">|</span>
          )}
        </h1>
        <p className="text-gray-200 text-lg max-[900px]:text-base max-w-xl">{summary}</p>
      </div>
    </section>
  );
};

export default Introduction;