import Navbar from "../Components/Navbar";
import StarNetworkBackground from "../Components/StarNetworkBackground";
import AboutMe from "../Sections/AboutMe";
import Education from "../Sections/Education";
import Introduction from "../Sections/Introduction";
import Project from "../Sections/Project";

const Portfolio = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <StarNetworkBackground />
            <Navbar />
            <Introduction />
            <AboutMe />
            <Education/>
            <Project/>
        </div>
    );
};

export default Portfolio;
