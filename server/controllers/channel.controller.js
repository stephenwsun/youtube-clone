var request = require('request');

exports.channel = function(req, res) {
  request(
    'https://www.googleapis.com/youtube/v3/channels', {
      data: {
        'id': 'UCKPbQfwD_EoQtCKetDVDUmQ',
        'part': 'snippet,contentDetails,statistics',
        'key': process.env.YOUTUBE_DATA_KEY
      }
    }, function(error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      res.send(body);
    }
  );

  // request(
  //   'https://www.googleapis.com/youtube/v3/search', {
  //     data: {
  //     channelId: 'UCKPbQfwD_EoQtCKetDVDUmQ',
  //     part: 'snippet',
  //     key: process.env.YOUTUBE_DATA_KEY
  //   },
  //     function(error, response, body) {
  //       console.log('error:', error); // Print the error if one occurred and handle it
  //       console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //       res.send(body);
  //   }
  //   });

  // request(
  //   'https://www.googleapis.com/youtube/v3/activities', {
  //     'data': {
  //       'channelId': 'UCKPbQfwD_EoQtCKetDVDUmQ',
  //       'maxResults': '25',
  //       'part': 'snippet,contentDetails',
  //       'key': process.env.YOUTUBE_DATA_KEY
  //     }
  //   }, function(error, response, body) {
  //     console.log('error:', error); // Print the error if one occurred and handle it
  //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //     res.send(body);
  //   }
  // );
}


