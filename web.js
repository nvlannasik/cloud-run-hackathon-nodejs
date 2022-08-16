const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['F', 'T', 'L', 'R'];
  const forward = 'F';
  const turn = 'T';
  const left = 'L';
  const right = 'R';

  // res.send(moves[Math.floor(Math.random() * moves.length)]);
  res.send(moves[Math.floor(Math.cos(Math.random() * moves.length))]);
});

app.listen(process.env.PORT || 8080);
