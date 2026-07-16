const LogoStrip = () => {
  return (
    /* The parent container sets the default layout and spacing structure */
    <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 md:gap-2 px-22 py-20">
      {/* Each image handles its own independent hover state transition */}
      <span className="w-20 h-12 sm:w-28 sm:h-16 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain grayscale opacity-50 contrast-200 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          src="./logos/amazon.png"
          alt="amazon"
        />
      </span>

      <span className="w-20 h-12 sm:w-28 sm:h-16 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain grayscale opacity-50 contrast-200 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          src="./logos/netflix.png"
          alt="netflix"
        />
      </span>

      <span className="w-20 h-12 sm:w-28 sm:h-16 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain grayscale opacity-50 contrast-200 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          src="./logos/piolt.png"
          alt="piolt"
        />
      </span>

      <span className="w-20 h-12 sm:w-28 sm:h-16 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain grayscale opacity-50 contrast-200 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          src="./logos/prime.png"
          alt="prime"
        />
      </span>

      <span className="w-20 h-12 sm:w-28 sm:h-16 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain grayscale opacity-50 contrast-200 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          src="./logos/samsung.png"
          alt="samsung"
        />
      </span>

      <span className="w-20 h-12 sm:w-28 sm:h-16 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain grayscale opacity-50 contrast-200 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
          src="./logos/yt.png"
          alt="yt"
        />
      </span>
    </div>
  );
};

export default LogoStrip;
