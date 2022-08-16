const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const movingHorizontal = ['L', 'R'];
const movingForward = ['F'];

app.get('/', function (req, res) {
  res.send('Let the battle begin!');
});

app.post('/', function (req, res) {
  console.log(req.body);
  const moves = ['F', 'T', 'L', 'R'];

  res.send(
    movingHorizontal[Math.floor(Math.random() * movingHorizontal.length)]
  );
  // res.send(moves[Math.floor(Math.random() * moves.length)]);
  // res.send(moves[Math.floor(Math.max(10) * moves.length + Math.random() * 10)]);
});

app.listen(process.env.PORT || 8080);
