const express = require('express');
const app = express();
const port = 2727;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}!`);
});