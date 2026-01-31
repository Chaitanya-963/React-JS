import React from "react";

const MainRight = () => {
  return (
    <div className=" relative w-1/2 p-2 h-full  overflow-hidden flex justify-center ">
      <img
        className="w-[20vw] h-fit object-cover object-center border border-blue-300 rounded-4xl "
        src="https://i.pinimg.com/736x/22/93/f0/2293f046fc1074c3561961224e0b068b.jpg"
        alt="Travel destination"
      />
      {/* Card 1 */}
      <div className=" absolute left-30 top-10 px-3 py-2 bg-slate-50 border border-blue-200 shadow flex h-fit rounded-xl gap-2 justify-between items-center">
        <img
          className="rounded-full w-10 h-10 bg-amber-300 object-cover object-center shadow-md shadow-blue-400"
          src="https://i.pinimg.com/736x/eb/76/a4/eb76a46ab920d056b02d203ca95e9a22.jpg"
          alt=""
        />
        <div>
          <h2 className="font-semibold">Mick Rose</h2>
          <span className="flex gap-1 items-center text-sm text-slate-600">
            <i className="ri-star-fill text-amber-400"></i> 4.9
          </span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="absolute left-25 bottom-30 px-3 py-2 bg-slate-50 border border-blue-200 shadow flex h-fit rounded-xl gap-2 justify-between items-center">
        <img
          className="rounded-full w-10 h-10 bg-amber-300 object-cover object-center shadow-md shadow-blue-400"
          src="https://i.pinimg.com/1200x/21/be/10/21be10df58569bdd5598207d9c1a4543.jpg"
          alt=""
        />
        <div>
          <h2 className="font-semibold">Leo Mathew</h2>
          <span className="flex gap-1 items-center text-sm text-slate-600">
            <i className="ri-star-fill text-amber-400"></i> 5.0
          </span>
        </div>
      </div>

      {/* Card 3 */}
      <div className=" absolute right-25 bottom-70 px-3 py-2 bg-slate-50 border border-blue-200 shadow flex h-fit rounded-xl gap-2 justify-between items-center">
        <img
          className="rounded-full w-10 h-10 bg-amber-300 object-cover object-center shadow-md shadow-blue-400"
          src="https://i.pinimg.com/1200x/5e/3f/55/5e3f5517f311900d0bf5f0dbb04f165f.jpg"
          alt=""
        />
        <div>
          <h2 className="font-semibold">Ethan Cruz</h2>
          <span className="flex gap-1 items-center text-sm text-slate-600">
            <i className="ri-star-fill text-amber-400"></i> 4.8
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainRight;
