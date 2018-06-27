const express = require('express');
const bodyParser = require('body-parser');
const port = 3001;

const app = express();
app.use(bodyParser.json());

let animals = ['dog', 'lion', 'bear cat', 'penguin', 'crock'];

//============ ENDPOINTS ==============

// GET ENDPOINTS
app.get('/api/test', (req, res) => {
  res.send('Hello World');
});

app.get('/api/animals', (req, res, next) => {
  res.send(animals);
});

// this.state = { animal: 'dolphin' };
// axios.put(`/api/animals/${this.state.animal}`);
// axios.put('/api/facebook/12');
// axios.post(`/api/animals`, { name: 'cat' });
// req.body, req.params, req.query

// POST ENDPOINT
app.post('/api/animals/:newAnimal', (req, res, next) => {
  console.log(req.params.newAnimal);
  animals.push(req.params.newAnimal);
  res.send(`We added a ${req.params.newAnimal}`);
});

app.post('/api/animals', (req, res, next) => {
  console.log(req.body.name);
  animals.push(req.body.name);
  res.send(`We added a ${req.body.name}`);
});

// axios.delete('/api/animals/2');

app.delete('/api/animals/:index', (req, res, next) => {
  const { index } = req.params;
  animals.splice(index, 1);
  res.send(`The animal in index ${index} has been removed`);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

// •	GET    -->  params or queries.
// •	DELETE -->  params or queries.
// •	PUT    -->  body, param, or query.
// •	POST   -->  body, param, or query.
