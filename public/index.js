var youtubeClone = angular.module('YoutubeClone', []);

youtubeClone.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'VideoController'
    })
    if(window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }
}]);

youtubeClone.controller('VideoController', function($scope) {
  console.log('This is the Video Controller');
});