var youtubeClone = angular.module('YoutubeClone', ['ngRoute']);

youtubeClone.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/videos/:id', {
      templateUrl: 'views/video.html',
      controller: 'VideoController'
    })
    if(window.history && window.history.pushState) {
      $locationProvider.html5Mode(true);
    }
}]);

youtubeClone.filter('ashtml', function($sce) {
  return $sce.trustAsHtml;
});

youtubeClone.controller('HomeController', function($scope, $http) {
  $scope.getHomeData = function() {
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

youtubeClone.controller('VideoController', function($scope, $http, $routeParams) {
  const routeId = $routeParams.id;
  
  $scope.getVideoData = function() {
    $http.get(`/api/videos/${routeId}`).then(res => {
      $scope.videos = res.data.items;
      console.log($scope.videos);
    });
  }
})