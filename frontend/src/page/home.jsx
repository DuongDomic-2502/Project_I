import Navbar from "../components/Navbar";
import BestSeller from "../components/BestSeller";
import FamousBranch from "../components/FamousBranch";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="flex-1 grid grid-cols-4 gap-6 p-6">
        <div className="col-span-1">
          <FamousBranch />
        </div>

        <div className="col-span-3">
          <BestSeller />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;  