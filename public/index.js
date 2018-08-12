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
  $scope.getChannelData = function() {
    $http.get('/api/videos').then(res => {
      $scope.videos = res.data.items;
      console.log($scope.videos);
    });

    $http.get('/api/channels').then(res => {
      $scope.channels = res.data.items;
      console.log($scope.channels);
    });
  }
});