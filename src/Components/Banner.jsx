import React, { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Banner({ gameBanner }) {
  useEffect(() => {
    console.log("gameBanner ", gameBanner);
  }, []);

  return (
    <div className="relative hover:scale-105 transition-all ease-in-out">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t  from-slate-900 to-transparent w-full ">

        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-700 text-white px-2 p-1">Get Now</button>

      </div>

      <img
        // eslint-disable-next-line react/prop-types
        src={gameBanner.background_image}
        alt="Game Picture"
        className="md:h-[320px] w-full object-cover rounded-xl"
      />
    </div>
  );
}

export default Banner;
