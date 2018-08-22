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
      console.log('Videos on Home Page');
      console.log($scope.videos);
    });

    $http.get('/api/channels').then(res => {
      $scope.channels = res.data.items;
      console.log('Channels on Home Page');
      console.log($scope.channels);
    });
  }
});

youtubeClone.controller('VideoController', function($scope, $http, $routeParams, $sce) {
  const routeId = $routeParams.id;
  
  $scope.url = $sce.trustAsResourceUrl(`//www.youtube.com/embed/${routeId}?autoplay=1&mute=1`);

  $scope.getVideoData = function() {
    $http.get(`/api/videos/${routeId}`).then(res => {
      const date = new Date(res.data.items[0].snippet.publishedAt);

      $scope.video = res.data.items;
      $scope.publishDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
      console.log('Video for Video Page');
      console.log($scope.video);

      $http.get(`/api/channels/${$scope.video[0].snippet.channelId}`).then(res => {
        $scope.channel = res.data.items;
        console.log('Channel Data for Video');
        console.log($scope.channel);
      });

      $http.get(`/api/related-videos/${routeId}`).then(res => {
        $scope.relatedVideos = res.data.items;
        console.log('Related Videos');
        console.log($scope.relatedVideos);
      });
    });
  }
})