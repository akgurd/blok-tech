const express = require('express')
const app = express()
const port = 3000

app.get('/games', (req, res) => {
  res.send('Games')
})

app.get('/favorites', (req, res) => {
  res.send('Favorites')
})

app.use

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})