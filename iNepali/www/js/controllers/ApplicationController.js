

var ApplicationController = function ($scope, $sce, $rootScope, $timeout, $state, $cordovaDevice, $cordovaToast,
  $ionicLoading, $ionicPopup, $ionicPlatform, AdMob, AppService) {

  var initialize = function () {
    $ionicLoading.show('Loading .....');
    $rootScope.vowels = AppService.vowels();
    $rootScope.consonents = AppService.consonents();
    $rootScope.numbers = AppService.numbers();
    $rootScope.songs = AppService.songs();


    AppService.getVideos().then(function (response) {
      $rootScope.videos = response.data;
    });

    $rootScope.vocMenus = AppService.getvocabularyMenus();

    $ionicLoading.hide();
  };


  // start display ad after 3 minutes  
  //$timeout(function () { $rootScope.showBanner(); }, 1000);
  //$timeout(function () { $rootScope.showInterstitial(); }, 30000);

  $rootScope.options = {
    loop: false,
    effect: 'slide',
    speed: 500,
    CSSWidthAndHeight: true,
    slidesPerView: 'auto'
  }

  $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
    // data.slider is the instance of Swiper
    console.log('$ionicSlides.sliderInitialized');
    data.slider.width = $rootScope.screenWidth;
    $rootScope.currentItem = $rootScope.data[data.slider.activeIndex];
    play();
  });

  $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
    console.log('Slide change is beginning');
    $rootScope.currentItem = $rootScope.data[data.slider.activeIndex];
    
    if (data.slider.activeIndex > $rootScope.data.length / 2) {
      $timeout(function () { $rootScope.showInterstitial(); }, 50000);
    }
    play();
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
    //  $rootScope.currentItem = $scope.data[data.slider.activeIndex];
    //$rootScope.currentItem = $scope.data[data.slider.activeIndex];
    //play();
  });

  $rootScope.playSound = function (item) {
    $rootScope.selectedCard = item.data;
    $rootScope.isBarkhari = item.isBarkhari;
    $rootScope.isGame = true;
    play();
  };

  $rootScope.stop_ext = function () {
    stop();
  };

  $rootScope.play_ext = function () {
    $rootScope.isGame = false;
    play();
  };


  // Cordova Media Play functionalist
  var stop = function () {
    if ($rootScope.media != null) {
      $rootScope.media.stop();
    }
  };

  var getMediaURL = function (s) {
    if (ionic.Platform.isAndroid()) return "/android_asset/www/" + s;
    return s;
  }

  // Media Play 
  var play = function () {

    stop();

    var iOSPlayingOptions = {
      numberOfLoops: 1
    };

    //Media Play Stutus Callback
    var mediaStatusCallback = function (status) {

      if (status == 1) {
        $ionicLoading.show({ template: 'Loading...' });
      }
      else {
        //$cordovaToast.showLongCenter('status: ' + status);
        $ionicLoading.hide();
      }
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

    var src;
    if ($rootScope.isGame) {
      src = getMediaURL("audio/" + $rootScope.selectedCard.audio);
    } else {
      if ($rootScope.isBarkhari) {
        src = getMediaURL("audio/" + $rootScope.currentItem.char + "0.mp3");
      } else {
        src = getMediaURL("audio/" + $rootScope.currentItem.char + ".mp3");
      }
    }

    //$cordovaToast.showLongCenter('src: ' + src);

    try {
      //$rootScope.media  = new Media(src, null, mediaError);
      //$rootScope.media = $cordovaMedia.newMedia(src);
      //$rootScope.media = new Media(src, null, null, mediaStatusCallback);
      $rootScope.media = new Media(src, null, null, mediaStatusCallback);
    } catch (err) {
      console.log(err.message);
      $cordovaToast.showLongCenter('Error while creating new Media');
    }

    //$cordovaToast.showLongBottom(platform);

    if (platform == 'iOS') {
      $rootScope.media.play(iOSPlayingOptions);
    } else {
      $rootScope.media.play();
    }
  };



  //Banner Ad Implementation
  $rootScope.showBanner = function () {

    var done = AdMob.showBanner();
    if (!done) {
      $ionicPopup.show({
        title: "AdMob is not ready",
        buttons: [
          {
            text: 'Got it!',
            type: 'button-positive',
            onTap: function (e) {
            }
          }
        ]
      })
    }
  };

  $rootScope.removeBanner = function () {
    AdMob.removeAds();
  };

  $rootScope.showInterstitial = function () {

    var done = AdMob.showInterstitial();
    if (!done) {
      $ionicPopup.show({
        title: "AdMob is not ready",
        buttons: [
          {
            text: 'Got it!',
            type: 'button-positive',
            onTap: function (e) {
            }
          }
        ]
      })
    }
  };



  $rootScope.data = null;
  $rootScope.songs = null;
  $rootScope.vowels = null;
  $rootScope.consonents = null;

  $rootScope.currentItem = null;

  $rootScope.screenWidth = window.outerWidth
  $rootScope.screenHeight = window.outerHeight;

  $rootScope.fontsize = 25;
  $rootScope.iconWidth = 30;
  $rootScope.iconHeight = 30;

  initialize();

};