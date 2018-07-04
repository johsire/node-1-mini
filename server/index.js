const express = reqire ('express');
const bodyParser = require ('body-parser');

const bc = require ('./controllers/books_controller');

const app = express();

app.use(bodyParser.json());

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id',bc.update);


const port = 3000;

app.listen(port, function() {
  console.log('Server listening on port' + port);
});
