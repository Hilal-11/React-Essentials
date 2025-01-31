import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "../ShimmerUI";
const GameMenu = () => {
    const { gameid } = useParams();
    const [gameMenu , setGameMunu] = useState({});
    useEffect(() => {
        getGameMenuInfo();
    }, [])

    const getGameMenuInfo = async () => {
       try {
        const data = await fetch("https://www.freetogame.com/api/game?id="+gameid)
        const response = await data.json();
        setGameMunu(response);
       }catch (err ) {
            console.log(err);
       }
    }

    return  (
        <div className="w-full h-auto px-10 py-10">
            <div className="bg-slate-800 rounded-xl shadow-2xl shadow-black ">
                <div><img className="rounded-xl w-full" src={gameMenu.thumbnail} alt="" /></div>
            </div>
            <div className="py-5 text-5xl font-extrabold text-blue-700">
                <h1 className="text-center">{gameMenu.title}</h1>
            </div>
            <div className="font-bold py-0 px-2">
                <p className="text-justify">{gameMenu.short_description}</p>
            </div>
            <div className="py-5 px-5 flex justify-between flex-wrap gap-4 lg:px-0">
                <h2 className="bg-blue-400 px-2 py-2 rounded-xl">{gameMenu.developer}</h2>
                <h2 className="bg-blue-400 px-2 py-2 rounded-xl">{gameMenu.publisher}</h2>
                <h2 className="bg-blue-400 px-2 py-2 rounded-xl">{gameMenu.platform}</h2>
            </div>
           <div className="flex justify-center py-6">
                <a className="bg-slate-900 rounded-xl py-4 text-center w-full" href="https://www.freetogame.com/open/enlisted">Download</a>
           </div>
        </div>
    )
}
export default GameMenu;