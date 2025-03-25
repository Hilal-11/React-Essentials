import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; 
const app = express();
const PORT = 4000;
app.use(cors());

app.get('/' , (req , res) => {
    res.send("<b>This is Backen to resolve the CORS issue</b>")
})
app.get('/api/games', async (req, res) => {
    const apiUrl = 'https://www.freetogame.com/api/games';
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.json(data); // Send the API response back to the frontend
    } catch (error) {
      console.error('Error fetching games data:', error.message);
      res.status(500).json({ error: 'Failed to fetch games data' });
    }
  });





  app.get('/api/game', async (req, res) => {
    const { id } = req.query; // Get the game ID from the query parameters
    const apiUrl = `https://www.freetogame.com/api/game?id=${id}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      res.json(data); // Send the API response back to the frontend
    } catch (error) {
      console.error('Error fetching game menu:', error.message);
      res.status(500).json({ error: 'Failed to fetch game menu' });
    }
  });

  
  
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`App is running on port no: ${PORT}`);
  });