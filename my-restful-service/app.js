const express = require('express');
const app = express();
const data = require('./data.json');
const path = require('path');

app.get('/users', (req, res) => {
  res.json({ users: data.users });
});

app.get('/games', (req, res) => {
  res.json({ games: data.games });
});

app.get('/games/:id', (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = data.games.find(game => game.id === gameId);

  if (!game) {
    return res.status(404).json({ error: 'Game not found' });
  }

  res.json({ game });
});

app.get('/users/:userId/orders', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = data.users.find(user => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const userOrders = data.orders.filter(order => order.userId === userId);
  res.json({ orders: userOrders });
});

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
