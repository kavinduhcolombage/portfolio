const Footer = () => {
    return (
        <footer className="relative bg-black py-6 mt-12">
            {/* Gradient top border */}
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700"></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 drop-shadow">
                    © {new Date().getFullYear()} Kavindu Hansana. All rights reserved.
                </span>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://github.com/kavinduhcolombage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition"
                    >
                        <svg width="24" height="24" fill="currentColor" className="inline-block">
                            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.38 9.38 0 012.5-.34c.85.01 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
                        </svg>
                    </a>
                    <a
                        href="mailto:hansana2024@email.com"
                        className="text-white hover:text-pink-400 transition"
                    >
                        <svg width="24" height="24" fill="currentColor" className="inline-block">
                            <path d="M4 4h16v16H4V4zm8 8l8-5.333V6l-8 5.333L4 6v.667L12 12z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition"
                    >
                        <svg width="24" height="24" fill="currentColor" className="inline-block">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.36-1.22 2.25-1.22 2.07 0 3.75 1.68 3.75 3.75v5.25z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;