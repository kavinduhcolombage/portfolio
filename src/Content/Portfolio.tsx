import CustomCursor from "../Components/CustomCursor";
import Navbar from "../Components/Navbar";
import StarNetworkBackground from "../Components/StarNetworkBackground";
import AboutMe from "../Sections/AboutMe";

const Portfolio = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <StarNetworkBackground />
            <Navbar />
            <AboutMe />
        </div>
    );
};

export default Portfolio;
