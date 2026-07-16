const ServiceCard = ({ img, name, description }) => {
  return (
    <div className="group flex flex-col items-start text-left max-w-56 transition-transform duration-300 hover:-translate-y-1">
      <div className="w-15 h-15 mb-6 flex items-center justify-center grayscale contrast-200 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
        <img
          src={img}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Service Name Heading */}
      <h3 className="text-lg font-medium text-neutral-900 tracking-tight mb-3">
        {name}
      </h3>

      {/* Service Brief Body Description */}
      <p className="text-sm font-light text-neutral-500 leading-relaxed tracking-wide">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
