const express = reqire ('express');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.listen(3000, function() {
  console.log('Server listening on port' + port);
});
