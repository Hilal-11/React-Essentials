import React, { useState , useEffect } from "react";
import Hero from "./Hero";
import ShimmerUI from "./ShimmerUI";
import { TfiTarget } from "react-icons/tfi";
const Body = ({onGameClick}) => {

  const filterData = (userQuary , allGamesData) => {
      return allGamesData.filter((game) => game?.title?.toLowerCase()?.includes(userQuary?.toLowerCase()))
  }
  const[loading , setLoading] = useState(true)
  const[fun , setFun] = useState(false);
  const [filterGames , setFilterGames] = useState([]);
  const [games , setGames] = useState([]);
  const [searchText , setSearchText] = useState("");
  const inputHandler = (event) => {
      setSearchText(event.target.value);
      setFun(true)
  }
  const searchHandler = () => {
    if(searchText !== ""){
      const newSearchGames = filterData(searchText , games)
      setFilterGames(newSearchGames);
    }else{
      alert("...")
    }
  }


  useEffect(() => {
    setLoading(true)
    fetch("https://www.freetogame.com/api/games")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setLoading(false)
        setFilterGames(data);
        setGames(data)     

      })
      .catch((error) => {
        console.log(error)
      })
  },[])


  // const length = gamesData.length / 10+2;
  // const newGamesData = gamesData.slice(0 , 10+2)
  // console.log(newGamesData)

  const [gameId , setGameId] = useState(null);
  useEffect(() => {
    const filteredGameData = games.filter((game) => {
      return game.id === gameId;
    })
    onGameClick(filteredGameData)
  },[gameId])

    return  (
        <div className="w-full h-auto my-20 flex justify-evenly flex-wrap gap-20 px-4 lg:px-0 ">
          <Hero/>
          <div className="relative text-center w-full ">
            <input 
              type="text"
              placeholder="Search Games :- "
              className="w-full lg:w-2/3 py-6 rounded-lg px-4 text-extrabold text-lg bg-slate-900 shadow-sm shadow-blue-600"
              onChange={ inputHandler }
              value={searchText}
            />
                <button className="relative text-3xl lg:top-2 lg:-left-16 lg:px-2 lg:py-2 rounded-lg shadow-inner bg-slate-950" 
                onClick={ searchHandler }
                ><TfiTarget className=" animate-spin text-red-800 hover:animate-none" /></button>
              
          </div>
           {
            (loading === true) ? <ShimmerUI /> :(
              filterGames.map((game) => (
                <div key={game.id} onClick={ () => {setGameId(game.id)} }>
                    <div  className='w-full lg:w-[420px] h-auto bg-slate-900 rounded-2xl shadow-md'>
                        
                        {
                            game.thumbnail !== "" ? <img className="rounded-t-2xl w-full" alt="game image" src={game.thumbnail}></img> : "Fuck"
                        }
                    <div className="flex justify-between px-2 py-2 items-center">
                        <h1 className="bg-blue-700 font-bold text-xl px-2 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text" >{game.title}</h1>
                        <h1 className="bg-blue-700 font-extrabold text-xl px-2 py-2 bg-gradient-to-r from-blue-500 to-fuchsia-600 text-transparent bg-clip-text">{game.publisher}</h1>
                    </div>
                    <div className="">
                        <p className="text-justify font-medium py-1 px-2 whitespace-wrap break-words">{game.short_description}</p>
                    </div>
                    <div className="flex justify-evenly gap-5 px-2">
                        <p className=" text-orange-700 font-bold text-center">{game.platform}</p>
                        <p className=" text-orange-700 font-bold text-center">{game.developer}</p>
                        <p className=" text-orange-700 font-bold text-center">{game.release_date}</p>
                    </div>
                    <div className="my-3">
                        <button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-2 rounded-b-2xl  hover:from-pink-600 hover:to-yellow-600">   
                            <a href={game.freetogame_profile_url} target="_blank" rel="noreferrer">Download</a>   
                        </button>
                    </div>
                </div>
              </div>
              )))
           }
        </div>
    )
}
export default Body;