import { FiArrowUpRight } from "react-icons/fi";
import Header from "./Header";
import { theme } from "../constant/theme";

const HeroSection = () => {
  return (
    <div
      className="rounded-b-[5rem] rounded-xl min-h-[85vh] flex flex-col"
      style={{ backgroundColor: theme.primaryColor }}
    >
      <Header />

      <div className="flex flex-col items-center justify-center grow w-full px-4 pt-10 pb-16">
        <div className="relative w-24 h-24 mb-4">
          <img
            src="./profilePic.png"
            alt="profileimg"
            className="w-full h-full rounded-full object-cover"
          />

          <span className="absolute -bottom-2 left-12 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-50 px-3 py-1 -rotate-6 text-xs sm:text-sm font-semibold shadow-md border border-slate-100 text-neutral-800">
            Chaitanya Mehetre 👨🏻‍💻
          </span>
        </div>

        <section className="flex flex-col items-center justify-center text-center px-4 py-6 max-w-3xl mx-auto w-full">
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* Main Hero Header Heading - Fully fluid sizes for text wrap */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-neutral-900 leading-[1.2] sm:leading-[1.15]">
              Building digital <br className="hidden sm:block" />
              <span className="text-neutral-500">
                products, brands,
              </span> and <br className="hidden sm:block" />
              experience.
            </h1>

            {/* Action Button CTA Trigger */}
            <button
              type="button"
              className="group flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-light px-6 py-3 rounded-full transition-all duration-300 shadow-sm active:scale-95"
            >
              <span>Latest Shots</span>
              <FiArrowUpRight className="text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
