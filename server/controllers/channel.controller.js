var request = require('request');

exports.channel = function(req, res) {
  const options1 = {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/channels',
    qs: {
      id: 'UCKPbQfwD_EoQtCKetDVDUmQ',
      part: 'snippet,contentDetails,statistics',
      key: process.env.YOUTUBE_DATA_KEY
    },
    json: true
  };

  const options2 = {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    qs: {
      channelId: 'UCKPbQfwD_EoQtCKetDVDUmQ',
      part: 'snippet',
      key: process.env.YOUTUBE_DATA_KEY
    },
    json: true
  };

  const options3 = {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/activities',
    qs: {
      'channelId': 'UCKPbQfwD_EoQtCKetDVDUmQ',
      'maxResults': '25',
      'part': 'snippet,contentDetails',
      'key': process.env.YOUTUBE_DATA_KEY
    },
    json: true
  };

  request(options3, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body);
  });
}


