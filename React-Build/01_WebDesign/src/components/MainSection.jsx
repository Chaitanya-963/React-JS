import { theme } from "../constant/theme";
import HeroSection from "./HeroSection";
import LogoStrip from "./LogoStrip";

const MainSection = () => {
  return (
    <div
      className="w-full h-full rounded-b-[4.5rem] pt-1 px-2 pb-4"
      style={{ backgroundColor: theme.white }}
    >
      <HeroSection />
      <LogoStrip />
    </div>
  );
};

export default MainSection;
