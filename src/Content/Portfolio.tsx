import Navbar from "../Components/Navbar";
import StarNetworkBackground from "../Components/StarNetworkBackground";
import AboutMe from "../Sections/AboutMe";
import ContactMe from "../Sections/ContactMe";
import Education from "../Sections/Education";
import Footer from "../Sections/Footer";
import Introduction from "../Sections/Introduction";
import Project from "../Sections/Project";

const Portfolio = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <StarNetworkBackground />
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
