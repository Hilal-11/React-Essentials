import { useState, useEffect } from 'react';

const useGamesBody = () => {
  const [loading, setLoading] = useState(true);
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:4000/api/games'); // Use the backend API
        if (response.ok) {
          const data = await response.json();
          setGamesData(data);
        } else {
          throw new Error('Error fetching data from the backend API!');
        }
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGamesData();
  }, []);

  return [loading, gamesData];
};

export default useGamesBody;