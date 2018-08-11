var request = require('request');

exports.videos = function(req, res) {
  const options = {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    qs: {
      type: 'video',
      q: 'coding',
      part: 'snippet',
      maxResults: '20',
      key: process.env.YOUTUBE_DATA_KEY
    },
    json: true
  };

  request(options, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body);
  });
}

exports.channels = function(req, res) {
  const options = {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    qs: {
      type: 'channel',
      q: 'coding',
      part: 'snippet',
      maxResults: '20',
      key: process.env.YOUTUBE_DATA_KEY
    },
    json: true
  };

  request(options, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body);
  });
}


