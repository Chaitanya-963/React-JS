import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

const Page3Main = () => {
  return (
    <div className="w-full h-[80vh]  flex justify-between pl-20 ">
      {/* Main left */}
      <MainLeft />
      {/* Main right */}
      <MainRight />
    </div>
  );
};

export default Page3Main;
