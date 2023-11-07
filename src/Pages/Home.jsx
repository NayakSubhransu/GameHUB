// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import GenreList from "../Components/GenreList";
import GlobalApi from "../Services/GlobalApi";
import { useState } from "react";
import Banner from "../Components/Banner";
import TrendingGames from './../Components/TrendingGames';
import GamesByGenresId from "../Components/GamesByGenresId";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres,setGameListByGenres] = useState([]);
  const [selectedGenresName,setSelectedGenresName]=useState('Action');

  //call the function once when the game is loaded
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);

  //get list of all games from an API
  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);

    });
  };
     
  const getGameListByGenreId=(id)=>
  {
    GlobalApi.getGameListByGenreId(id).then((resp)=>
    {
      console.log("Gamelist By Genre Id:"+resp.data.results)
      setGameListByGenres(resp.data.results);
        
    }

      )
  }


  return (
    <div className="grid grid-cols-4 px-8">
      <div className=" h-full hidden md:block">
        <GenreList setGenresId={(setGenresId)=>getGameListByGenreId(setGenresId)}
               selectedGenresName={(name)=> setSelectedGenresName(name)}
        />
      </div>

      <div className="col-span-4 md:col-span-3 ">
        { allGameList?.length > 0 && gameListByGenres?.length>0 ? 
        <div>
          <Banner gameBanner={gameListByGenres[0]} />
          <TrendingGames   gameList={allGameList}/>
          <GamesByGenresId gameList={gameListByGenres} selectedGenresName={selectedGenresName} />
        </div>
          
        : null}
      </div>
    </div>
  );
};

export default Home;
