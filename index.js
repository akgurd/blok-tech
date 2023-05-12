const http = require('http')
const express = require('express')

http.createServer(onrequest).listen(8000)

function onrequest(req, res){
    res.statusCode = 200
    res.setHeader ('Content-type', 'text/html')
    res.send ('Hello World!\n')
}

function onhome(req, res) {
    res.send('<h1>Hello World!</h1>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>')
}

express()
    .use('/static',express.static('static'))

    .get('/', onhome)
    .get('/about', onabout)

    .listen(8000)

function onhome(req, res) {
    res.send('<h1>Hello World!</h1>')
}

function onabout(req, res) {
    res.send('<h1>About me</h1>')
}

app.get('/', function(req, res) {
    res.render('home', { title: 'Homepage' });
  });