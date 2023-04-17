const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon');

// Configuring engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// Middleware 
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

// Parsing incoming data from request
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// index route
app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon });
});

app.get('/pokemon/:name', (req, res) => {

  res.render('Show', { pokemon: pokemon [req.params.name] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
