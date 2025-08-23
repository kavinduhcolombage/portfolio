import { useState } from "react";
import Loading from "../Components/Loading";
import Portfolio from "../Content/Portfolio";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    return (
        <div className="h-[100vh] w-[100vw]">
            {loading ? (
                <Loading onFinish={() => setLoading(false)} />
            ) : (
                <Portfolio />
            )}
        </div>
    );
};

export default HomePage;
