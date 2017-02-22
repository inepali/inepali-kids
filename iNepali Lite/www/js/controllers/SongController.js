
var SongController = function ($scope, $http, $rootScope, $timeout, $state, $cordovaMedia, $cordovaDevice, $cordovaToast) {

  $scope.init = function () {
    $scope.songs = $rootScope.songs;
  };


  // Cordova Media Play functionalist
  $scope.stopsong = function () {
    if ($rootScope.media != null) {
      $rootScope.media.stop();
    }
    $scope.currentTrack = null;
  };

  $scope.playsong = function (item) {

    $scope.stopsong();
    $scope.currentTrack = item;

    var url = 'http://www.archive.org/download/ChildrenSongsVol1/';

    var iOSPlayingOptions = {
      numberOfLoops: 1
    };

    // the platform 
    var platform = null;
    if ($cordovaDevice) {
      try {
        platform = $cordovaDevice.getPlatform();
      } catch (err) {
        console.log(err.message);
      }
    }

    ///$cordovaToast.showLongCenter('platform: ' + platform);

    var src = url + $scope.currentTrack.mp3;
    $rootScope.media = new Media(src, null, null);
    //$rootScope.media = $cordovaMedia.newMedia(src);

    if (platform == 'iOS') {
      $rootScope.media.play(iOSPlayingOptions);
    } else {
      $rootScope.media.play();
    }

  };

  $scope.indx = 0;
  $scope.screenWidth = window.outerWidth
  $scope.screenHeight = window.outerHeight;
  $scope.currentTrack = null;
};