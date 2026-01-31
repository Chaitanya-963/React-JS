const BookingActionContent = () => {
  return (
    <div className="bg-purple-500/25 w-[80%] h-[25vh] rounded-3xl p-6 border flex flex-col gap-8 text-white border-slate-300">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Actions section */}
        <div className="flex gap-8 justify-start items-center capitalize cursor-pointer">
          <h3 className="text-sm font-medium border-b-2 border-gray-100 pb-2 inline-block">
            hostelry
          </h3>
          <h3 className="text-sm font-medium text-slate-200 border-b-2 border-gray-500 pb-2 inline-block">
            flights
          </h3>
          <h3 className="text-sm font-medium text-slate-200 border-b-2 border-gray-500 pb-2 inline-block">
            bus & shuttle
          </h3>
          <h3 className="text-sm font-medium text-slate-200 border-b-2 border-gray-500 pb-2 inline-block">
            cars
          </h3>
        </div>

        <h3 className="text-slate-200 text-sm pb-2 cursor-pointer">
          Last Searching <i class="ri-arrow-right-s-line"></i>
        </h3>
      </div>

      {/* Bottom section */}
      <div className="relative flex justify-between items-center">
        <div className="flex items-center gap-15">
          {[
            {
              title: "Destination",
              icon: (
                <i className="ri-map-pin-2-fill text-sm text-amber-300"></i>
              ),
              value: "Bali,Indonesia",
            },
            {
              title: "Check-In",
              icon: <i className="ri-calendar-view text-sm text-amber-300"></i>,
              value: "Sat, 2 Nov 2025",
            },
            {
              title: "Check-Out",
              icon: <i className="ri-calendar-view text-sm text-amber-300"></i>,
              value: "Mon, 4 Nov 2025",
            },
            {
              title: "Room & Guest",
              icon: <i className="ri-user-fill text-sm text-amber-300"></i>,
              value: "1 Room, 2 Guest",
            },
          ].map((e) => {
            return (
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-100 capitalize font-light text-sm">
                  {e.title}
                </h3>
                <div className="bg-slate-900/60 shadow-sm shadow-blue-400 py-2 px-7 rounded-md flex items-center justify-center gap-2 cursor-pointer">
                  {e.icon} <span className="text-sm font-bold">{e.value}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button className="bg-blue-400 px-8 py-2 rounded-xl absolute bottom-0 right-5 cursor-pointer">
          {" "}
          <i className="ri-search-line text-xl"></i>{" "}
          <span className="font-medium">Search</span>
        </button>
      </div>
    </div>
  );
};

export default BookingActionContent;
