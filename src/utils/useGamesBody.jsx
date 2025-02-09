import { useState , useEffect } from 'react'
const useGamesBody = () => {
    const [loading , setLoading] = useState(true)
    const [gamesData , setGamesData] = useState([]);
    useEffect(() => {
        const fetchGamedData = async () => {
            try {
                setLoading(true);
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
            }finally {
                setLoading(false)
            }
        };
        fetchGamedData();
    } , []);
    return [loading , gamesData];
};

export default useGamesBody