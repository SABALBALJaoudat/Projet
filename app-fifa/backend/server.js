// server.js
const express = require('express');
const app = express();

const players = [
  { name: 'Lionel Messi', club: 'Paris Saint-Germain', nationality: 'Argentine', price: '$100M' },
  { name: 'Cristiano Ronaldo', club: 'Manchester United', nationality: 'Portugal', price: '$75M' },
  // Ajoutez d'autres joueurs ici...
];

app.get('/players', (req, res) => {
  res.json(players);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
