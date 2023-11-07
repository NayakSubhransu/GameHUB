import React, { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, []);
      //Strictly use object-cover property to maintain the aspect ratio of the logo
  return (
    <div>
      <h2 className="font-bold text-[35px] text-center p-4 dark:text-red">Trending Games </h2>

      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 ">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div key={item.id} className=" rounded-lg  bg-slate-400 mx-1
                hover:scale-110 transition-all duration-400 ease-in-out cursor-pointer">

                <img src={item.background_image} alt="Game logo"
                className="h-[300px] rounded-t-lg object-cover p-2" />
                <h2 className=" text-center dark:text-white text-[20px] font-bold p-2">{item.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
