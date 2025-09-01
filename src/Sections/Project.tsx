const projects = [
    {
        title: "Uni Connect",
        image: "/projects/uniconnect.png",
        description: "A web application developed with React, Vite, Tailwind CSS, Mantine, React Router, and state management. Uni Connect helps university students find internships and connect with opportunities.",
        link: "https://github.com/kavinduhcolombage/UniConnect_Frontend.git"
    },
    //test
    // {
    //     title: "Galaxy Explorer",
    //     image: "/projects/galaxy-explorer.png",
    //     description: "A web app to visualize and explore galaxies in 3D space. Built with React, Three.js, and Tailwind CSS.",
    //     link: "https://github.com/yourusername/galaxy-explorer",
    // },
    // {
    //     title: "Star Network Chat",
    //     image: "/projects/star-network-chat.png",
    //     description: "A real-time chat application with a cosmic theme, featuring animated backgrounds and secure messaging.",
    //     link: "https://github.com/yourusername/star-network-chat",
    // },
    // {
    //     title: "Nebula Portfolio",
    //     image: "/projects/nebula-portfolio.png",
    //     description: "A personal portfolio template inspired by nebulae, with interactive sections and smooth animations.",
    //     link: "https://github.com/yourusername/nebula-portfolio",
    // },
];

const Project = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[50vh] px-24 max-[400px]:px-10 py-12">
            <div className="relative z-10 text-center w-full">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg mb-10">
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