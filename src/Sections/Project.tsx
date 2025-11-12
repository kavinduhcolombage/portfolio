const projects = [
    {
        title: "Uni Connect",
        image: "/projects/uniconnect.png",
        description: "A web application developed with React, Vite, Tailwind CSS, Mantine, React Router, and state management. Uni Connect helps university students find internships and connect with opportunities.",
        link: "https://github.com/kavinduhcolombage/UniConnect_Frontend.git"
    },
    {
        title: "SpeakZ – Public Speaking Assistant Robot",
        image: "/projects/speakz.png",
        description: "An interactive robot assistant for public speaking practice with real-time user tracking and speech analysis, powered by Azure Cognitive Services and Python.",
        link: "https://github.com/kavinduhcolombage/robotic-project.git"
    },
    {
        title: "E-Learning System Backend",
        image: "/projects/elearn.png",
        description: "Developed a secure REST API for a university e-learning platform with role-based authentication, user management, and JWT-based security.",
        link: "https://github.com/kavinduhcolombage/ELearningBackEnd.git"
    },
    {
        title: "PhoneStore",
        image: "/projects/estore.png",
        description: "A simple smartphone selling website built with HTML, CSS, and JavaScript. Includes a home page with featured smartphones, product listings with details and prices, and a contact form for inquiries.",
        link: "https://github.com/kavinduhcolombage/phoneStore.git"
    },
    {
        title: "COVID-19 Pandemic Analysis in Belgium",
        image: "/projects/covid.png",
        description: "Conducted an in-depth data analysis of the COVID-19 pandemic’s impact on Belgium using R. Performed exploratory data analysis, created dynamic visualizations, and carried out cross-country comparisons to identify key patterns, anomalies, and insights.",
        link: "https://github.com/kavinduhcolombage/R-project-on-Covid-19-pandemic-in-Belgium.git"
    }


];

const Project = () => {
    return (
        <section id="projects" className="scroll-mt-12 relative flex flex-col items-center justify-center min-h-[50vh] px-24 max-[400px]:px-10 py-12">
            <div className="relative z-10 text-center w-full">
                <h2 className="text-4xl max-[400px]:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 drop-shadow-lg mb-10">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-gradient-to-br from-blue-900 via-blue-800 to-black rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-transform hover:scale-105"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 max-[400px]:h-38 object-cover sm:h-48"
                            />
                            <div className="p-6 flex flex-col flex-1 justify-between">
                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-300 text-white font-semibold shadow hover:opacity-80 transition"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;