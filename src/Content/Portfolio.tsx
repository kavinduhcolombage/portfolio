import Navbar from "../Components/Navbar";
import StarNetworkBackground from "../Components/StarNetworkBackground";
import AboutMe from "../Sections/Aboutme";
import Introduction from "../Sections/Introduction";

const Portfolio = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <StarNetworkBackground />
            <Navbar />
            <Introduction />
            <AboutMe />
        </div>
    );
};

export default Portfolio;
