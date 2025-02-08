import NavBar from "./components/common/NavBar";
import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import TestimonialSection from "./components/sections/TestimonialSection";

const App = () => {
  return (
    <div className=" h-full w-full bg-[#000000]">
      {/* <div></div> */}
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <HowItWorksSection />
    </div>
  );
};

export default App;
