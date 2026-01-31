import React from "react";

const PopularImages = () => {
  const places = [
    {
      id: 1,
      image:
        "https://i.pinimg.com/1200x/1d/11/e0/1d11e025ca7449bad3116246e99e907c.jpg",
      title: "SC, Mindanou",
      location: "Mindanou, Philippines",
    },
    {
      id: 2,
      image:
        "https://i.pinimg.com/1200x/21/8c/23/218c236307c777063581c35a5fba4333.jpg",
      title: "Santorini Escape",
      location: "Santorini, Greece",
    },
    {
      id: 3,
      image:
        "https://i.pinimg.com/736x/bf/1c/bb/bf1cbb432be6e8599604935fe07a7cd6.jpg",
      title: "Kyoto Temple",
      location: "Kyoto, Japan",
    },
    {
      id: 4,
      image:
        "https://i.pinimg.com/1200x/5c/41/9a/5c419a116cfa5021e8e3ef50bc2f2ecc.jpg",
      title: "Amalfi Coast",
      location: "Amalfi, Italy",
    },
  ];

  return (
    <div className="w-full  flex justify-between items-center gap-5">
      {places.map((place) => (
    <div
      key={place.id}
      className="h-[40vh] w-[22vw] flex flex-col gap-2 p-2 object-cover object-center"
    >
      <img
        className="rounded-3xl w-[20vw] h-[40vh] object-cover"
        src={place.image}
        alt={place.title}
      />
      <div className="px-2">
        <h2 className="font-bold">{place.title}</h2>
        <h3 className="flex items-center gap-1">
          <i className="ri-map-pin-2-fill text-blue-500"></i>
          <span className="text-sm font-light">{place.location}</span>
        </h3>
      </div>
    </div>
  ))}
    </div>
  );
};

export default PopularImages;
