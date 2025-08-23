import { useState } from "react";
import Loading from "../Components/Loading";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
  return (
    <div className="h-[100vh] w-[100vw]">
      {loading ? (
          <Loading onFinish={() => setLoading(false)} />
        ) : (
          <div className="text-white bg-blue-500">Portfolio Content</div>
        )}
    </div>
  );
};

export default HomePage;
