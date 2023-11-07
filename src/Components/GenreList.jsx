// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({setGenresId,selectedGenresName}) {
  //Holds the list of genres received from API Calls
  const [genreList, setGenreList] = useState([]);

  //to keep track of the Selected/Currently active  Instance
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    getGenreList();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      //   console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white"> Genres</h2>

      {genreList.map((item, index) => (
        // eslint-disable-next-line react/jsx-key
        <div
          id={item.id}
          onClick={() => {setActiveIndex(index); 
            setGenresId(item.id);selectedGenresName(item.name)
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg w-[280px]
          hover:dark:bg-gray-600  ${
            activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
          }`}
        >
          <img
            src={item.image_background} id={item.id}
            className={`w-[40px] h-[40px] object-cover rounded-lg 
            group-hover:scale-105 transition-all ease-out duration-300 ${
              activeIndex == index ? "scale-105" : null
            }`}
          />
          <h3    id={item.id}
            className={`dark:text-white text-[18px] group-hover:font-bold 
            transition-all ease-out duration-300 ${
              activeIndex == index ? "font-bold" : null
            }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
