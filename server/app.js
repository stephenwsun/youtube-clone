const express = require('express');
const app = express();
const port = 2727;
const youtube = require('./routes/youtube.routes');

require('dotenv').config();

app.use(express.static('public'));
app.use('/api', youtube);

// app.use(process.env.YOUTUBE_DATA_KEY);

app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}!`);
});