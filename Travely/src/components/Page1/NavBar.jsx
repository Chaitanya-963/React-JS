import React from "react";

const NavBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-16  flex items-center justify-between z-50 px-15 text-slate-400">
      <h1 className="text-2xl font-tradewinds text-blue-500">Travely</h1>
      <div className=" flex items-center gap-10 ">
        {["home", "ticket", "explore", "activity"].map((elem) => {
          return  <h3 className="text-md font-medium cursor-pointer capitalize hover:text-black">
          {elem}
        </h3>
        })}
      </div>
      <div className="flex items-center gap-5 ">
        <button className="text-sm cursor-pointer text-blue-500">
          sign In
        </button>
        <button className="text-sm cursor-pointer bg-blue-400 px-3 py-2 rounded-md font-medium text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
