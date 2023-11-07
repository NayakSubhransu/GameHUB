import axios from 'axios';


const key="87a5ccf0c08f491886686d4d3e76a220";

//`axios.create` method is used to create a
// customized instance of Axios with custom configurations.


//Using axios.create is helpful in scenarios where you have a 
//common set of headers, a specific base URL, or other custom 
//settings that should apply to a group of API requests but not necessarily to all requests made with Axios.

const axisCreate=axios.create(
    {
        baseURL:"https://api.rawg.io/api",
    }
)

 const getGenreList=axisCreate.get('/genres?key='+key);

 const getAllGames=axisCreate.get('/games?key='+key);

 const getGameListByGenreId=(id)=>axisCreate.get('/games?key='+key+'&genres='+id);


 export default {getGenreList, getAllGames,getGameListByGenreId};