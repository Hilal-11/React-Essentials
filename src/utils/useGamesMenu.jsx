// import { useState , useEffect } from "react";

// const useGamesMenu = (gameid) => {
// const [gameDataMenu , setGameDataMenu] = useState(null);

//     useEffect(() => {
//         getGameMenuInfo();
//     }, []);

//     const getGameMenuInfo = async () => {
//        try {
//         const data = await fetch("https://www.freetogame.com/api/game?id="+gameid)
//         const response = await data.json();
//         setGameDataMenu(response);
//        }catch (err ) {
//             console.log(err);
//        }
//     }
//     console.log(gameDataMenu);
// } 

// export default useGamesMenu


import { useState, useEffect } from 'react';

const useGamesMenu = (gameid) => {
  const [gameMenu, setGameMenu] = useState('');

  useEffect(() => {
    const fetchGameMenu = async () => {
      try {
        const response = await fetch(`https://www.freetogame.com/api/game?id=${gameid}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGameMenu(data);
      } catch (err) {
        console.error('Error fetching game menu:', err);
      }
    };

    if (gameid) {
      fetchGameMenu();
    }
  }, [gameid]);

  return gameMenu;
};

export default useGamesMenu;