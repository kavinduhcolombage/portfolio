import DarkVeil from "../Components/DarkVeli/DarkVeil";
import Navbar from "../Components/Navbar";
import AboutMe from "../Sections/AboutMe";
import ContactMe from "../Sections/ContactMe";
import Education from "../Sections/Education";
import Footer from "../Sections/Footer";
import Introduction from "../Sections/Introduction";
import Project from "../Sections/Project";

const Portfolio = () => {
    return (
        <div className="relative w-full">
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <DarkVeil />
            </div>

            {/* Foreground content */}
            <Navbar />
            <Introduction />
            <AboutMe />
            <Education />
            <Project />
            <ContactMe />
            <Footer />

        </div>
    );
};

export default Portfolio;
