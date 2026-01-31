import React from "react";
import BookingAction from "./BookingAction";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className=" relative w-full min-h-screen  flex flex-col items-center justify-center pt-10 ">
      <HeroContent/>

      <BookingAction/>
    </div>
  );
};

export default Hero;
