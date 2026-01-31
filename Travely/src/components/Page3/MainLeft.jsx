import React from "react";

const MainLeft = () => {
  return (
    <div className="w-1/3 h-full flex flex-col items-start justify-evenly">
      <div className="flex flex-col gap-2">
        <span className="bg-blue-400 text-white py-0.5 text-center font-medium px-4 rounded-md w-fit">
          01
        </span>
        <h2 className="text-xl font-semibold">
          Find trips that fit your freedom
        </h2>
        <p className="text-md text-slate-500">
          Travelling offers freedom and flexibiltiy, solitude and spontaneity,
          and privacy and purpose
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="bg-purple-400 text-white py-0.5 text-center font-medium px-4 rounded-md w-fit">
          02
        </span>
        <h2 className="text-xl font-semibold">
          Discover destinations that inspire you
        </h2>
        <p className="text-md text-slate-500">
          Explore breathtaking locations around the world and experience new
          cultures that spark your sense of wonder.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="bg-red-400 text-white py-0.5 text-center font-medium px-4 rounded-md w-fit">
          03
        </span>
        <h2 className="text-xl font-semibold">
          Plan effortlessly with smart toolsm
        </h2>
        <p className="text-md text-slate-500">
          Use intelligent suggestions, tailored itineraries, and real-time
          insights to make your journey seamless.
        </p>
      </div>

      <button className="py-3 px-5 bg-blue-500 text-white font-medium rounded-md">
        Start your explore
      </button>
    </div>
  );
};

export default MainLeft;
