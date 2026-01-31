import React from "react";
import Page3Content from "./Page3Content";
import Page3Main from "./Page3Main";

const Page3 = () => {
  return (
    <div className="w-full h-screen p-10 flex flex-col gap-5 justify-center">
      <Page3Content/>
      <Page3Main/>
    </div>
  );
};

export default Page3;
