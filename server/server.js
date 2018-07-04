var express = require("express");

var bodyParser = require('body-parser');

var bc = require('./controllers/books_controller.js');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/server'));


app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('./api/books/:id', bc.delete);


const port = 3000;

app.listen(port, function() {
  console.log('Server listening on port' + port);
});
