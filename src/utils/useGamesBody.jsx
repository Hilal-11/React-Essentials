import { useState , useEffect } from 'react'

const useGamesBody = () => {
    const [gamesData , setGamesData] = useState([]);
    useEffect(() => {
        const fetchGamedData = async () => {
            try {
                const response = await fetch('https://www.freetogame.com/api/games');
                if(response.ok) {
                    const data = await response.json();
                    setGamesData(data);
                }
                else {
                    throw new Error("Error fetch data form api!!!");
                }
            }catch(err) {
                console.log(err);
            }
        };

        fetchGamedData();
    } , []);
    return gamesData;
};

export default useGamesBody