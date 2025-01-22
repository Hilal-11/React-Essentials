import React from "react";
import { useParams } from 'react-router-dom'
const GameMenu = (paramsGame) => {
    console.log(paramsGame);
    // const params = useParams();
    // const {id} = params;
    // console.log(paramsGame)

    // const {id } = useParams();

    return  (
        <div>
            <h1>Game id : {paramsGame.id}</h1>
            <h1>Game Name : {paramsGame.title}</h1>
            <a href={paramsGame.freetogame_profile_url}>Game Download Link{}</a>
            <p>{paramsGame.short_description}</p>
        </div>
    )
}
export default GameMenu;