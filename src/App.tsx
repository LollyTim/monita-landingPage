import NavBar from "./components/common/NavBar";
import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";

const App = () => {
  return (
    <div className="bg-[#000000] h-screen">
      {/* <div></div> */}
      <NavBar />
      <HeroSection />
      <FeaturesSection />
    </div>
  );
};

export default App;
