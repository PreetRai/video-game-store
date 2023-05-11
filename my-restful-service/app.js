const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
app.use(express.static(path.join(__dirname, 'public')));
// Route to display the collection of video games
app.get('/games', (req, res) => {
  fs.readFile(path.join(__dirname, 'games.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const games = JSON.parse(data);
      res.json(games);
    }
  });
});
// Route to get a game by ID
app.get('/games/:id', (req, res) => {
  const gameId = parseInt(req.params.id);
  fs.readFile(path.join(__dirname, 'games.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const games = JSON.parse(data);
      const game = games.games.find(game => game.id === gameId);
      if (game) {
        res.json(game);
      } else {
        res.status(404).json({ error: 'Game not found' });
      }
    }
  });
});
app.get('/games/genre/:genre', (req, res) => {
  const genre = req.params.genre.toLowerCase();
  fs.readFile(path.join(__dirname, 'games.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const games = JSON.parse(data);
      const filteredGames = games.filter(game => game.genre.toLowerCase() === genre);
      res.json(filteredGames);
    }
  });
});
// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
