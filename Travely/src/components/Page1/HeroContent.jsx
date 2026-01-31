import React from "react";

const HeroContent = () => {
  return (
    <div className="relative w-[90vw] h-[85vh] flex justify-center items-center bg-cover bg-center rounded-4xl bg-[url(https://i.pinimg.com/1200x/e2/5d/d1/e25dd1c74a89de97b4b633d763b11444.jpg)] ">
      <h2 className="absolute top-14 text-6xl leading-tight font-bold text-white text-center ">
        Explore the whole world <br /> and enjoy its beauty
      </h2>
      <h3 className="absolute text-white top-60 text-xl font-light">
        Find and write about your experience around the world
      </h3>
    </div>
  );
};

export default HeroContent;
