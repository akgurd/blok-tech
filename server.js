const { engine } = require('express-handlebars');
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;


app.use('/static', express.static('static'));
app.use('/js', express.static('js'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

   
    app.get('/', function(req, res) {
      res.render('home', { title: 'Homepage' });
    });
    


    http.listen(PORT, () => {
      console.log(`Server gestart on port ${PORT}`);
    });
