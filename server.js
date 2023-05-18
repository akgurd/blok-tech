const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
const { MONGO_URI } = require('/Users/Deniz/blok-tech/.env');
const client = new MongoClient(MONGO_URI);


app.get('/games', (req, res) => {
  res.send('Games')
});

app.get('/favorites', (req, res) => {
  res.send('Favorites')
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});