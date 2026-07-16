import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      img: "./logos/ui_ux.png",
      name: "UI & UX",
      description:
        "Designing intuitive, user-centered wireframes and high-fidelity interfaces that simplify complex user journeys.",
    },
    {
      img: "./logos/web_mobile.png",
      name: "Web & Mobile App",
      description:
        "Building cross-platform mobile apps and responsive web tools tailored for seamless modern performance.",
    },
    {
      img: "./logos/webdesign.png",
      name: "Design & Creative",
      description:
        "Crafting distinct visual brand identities, graphic assets, and creative layouts that make your product stand out.",
    },
    {
      img: "./logos/development.png",
      name: "Development",
      description:
        "Writing clean, efficient, and scalable front-end and back-end code to transform static designs into production.",
    },
  ];

  return (
    <div className="h-screen w-full mx-auto flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 leading-[1.2] sm:leading-[1.15] text-center">
        Collaborate with <br className="block sm:hidden" />{" "}
        <span className="text-neutral-500">brands and agencies</span>{" "}
        <br className="hidden md:block sm:hidden" />
        to create impactful results.
      </h1>

      <div className="py-10 px-4 w-full">
        <div className="relative h-0.5 w-full max-w-6xl mx-auto bg-neutral-200">
          {/* The absolute badge centers perfectly over the line intersection layout */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-5 py-1.5 -rotate-6 text-xs sm:text-sm font-medium shadow-sm border border-neutral-100 text-neutral-800 tracking-tight">
            Services
          </span>
        </div>
      </div>

      <div className="flex gap-22 justify-between items-center ">
        {services.map((service) => (
          <ServiceCard
            img={service.img}
            name={service.name}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
