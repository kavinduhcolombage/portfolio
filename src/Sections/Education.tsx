const educationData = [
  {
    title: "BSc (Hons) in Computer Science",
    institution: "University of Sri Jayewardenepura",
    year: "2022 - Present",
    description: "Physical Science student specializing in Computer Science, with a strong base in mathematics and statistics.",
  },
  {
    title: "G.C.E. Advanced Level",
    institution: "Mahanama College, Colombo",
    year: "2018 - 2020",
    description: "Studied under the Physical Science stream with a focus on Mathematics, Physics, and Chemistry.",
  },
  {
    title: "G.C.E. Ordinary Level",
    institution: "C.W.W. Kannangara College, Colombo",
    year: "2017",
    description: "",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative flex flex-col items-center justify-center min-h-[50vh] px-6 py-12">
      <div className="relative z-10 text-center max-w-2xl">
        <h2 className="text-4xl max-[400px]:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 drop-shadow-lg mb-10">
          Education
        </h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-md">
            {/* Timeline vertical line */}
            <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex items-start mb-10 relative">
                {/* Timeline dot */}
                <div className="z-10 mt-1 w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg border-2 border-white"></div>
                <div className="ml-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                  <span className="text-sm text-purple-300 font-semibold">{edu.institution}</span>
                  <span className="block text-xs text-blue-300 mb-2">{edu.year}</span>
                  <p className="text-gray-300 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;