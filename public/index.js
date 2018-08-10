var youtubeClone = angular.module('YoutubeClone', ['ngRoute']);

youtubeClone.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'VideoController'
    })
    if(window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }
}]);

youtubeClone.controller('VideoController', function($scope, $http) {
  console.log('This is the Video Controller');

  // $scope.getAllVideos = function() {
  //   $http.get(
  //     'https://www.googleapis.com/youtube/v3/channels', {
  //     params: {
  //       'id': 'UCKPbQfwD_EoQtCKetDVDUmQ',
  //       'part': 'snippet,contentDetails,statistics',
  //       'key': 'AIzaSyAWta3FX760zH3ny9Z9C06YxutMlushPjo'
  //     }
  // })
  //   .then(res => {
  //     console.log(res);
  //     $scope.videos = res.data.items[0];
  //     console.log($scope.videos);
  //   })
  // }

  $scope.getChannelData = function() {
    // $http.get('/api/key').then(res => {
    //   $scope.key = res.data;
    //   console.log($scope.key);
    // });

    $http.get('/api/channel').then(res => {
      $scope.channel = res.data;
      console.log(res);
    });
  }
});