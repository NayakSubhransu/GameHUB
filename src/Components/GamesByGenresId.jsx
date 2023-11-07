import React, { useEffect } from "react";

function GamesByGenresId({ gameList ,selectedGenresName}) {
  useEffect(() => {
    console.log("GameList --", gameList);
  }, []);

  return (
    <div>
      <h2 className="font-bold text-[35px] text-center mt-12 mb-1">
        {selectedGenresName} Games
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {gameList.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <div className="my-7 mx-2 rounded-lg bg-slate-600
           hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
            <img
              id={item.id}
              src={item.background_image}
              className="w-full object-cover rounded-xl h-[90%]"
            />
            <h2 id={item.id} className="text-center font-bold text-black bg-slate-300">
              {item.name}
              <span> {item.metacritic}</span>
            </h2>
            <h2
              id={item.id}
              className=" bg-slate-300 rounded-b-lg text-center mb-2"
            >
              ⭐ {item.rating} 💭 {item.reviews_count} 🔥{" "}
              {item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesByGenresId;
