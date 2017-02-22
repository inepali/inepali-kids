
var VocabularyController = function ($scope, $rootScope, $state, $sce, $ionicModal, AppService, $ionicLoading) {


  $scope.init = function () {
    //$ionicLoading.show('Loading .....');
    AppService.getVocabularyCategories().then(function (response) {
      $scope.menus = response.data;
      //$ionicLoading.hide();
    });
  };

  $scope.speakText = function (_text) {

    var textToRead = _text.substring(_text.indexOf("(")+1, _text.indexOf(")"));


    window.TTS.speak({
      text: _text,
      locale: 'ne-NPL',
      rate:0.75

    }, function () {
      // do after success
    }, function (error) {
      // handle the error case
      console.log(error);
    });

 // responsiveVoice.setDefaultVoice("Hindi Female");
 // responsiveVoice.speak(textToRead);
  };


  $scope.refreshCategory = function () {
    $scope.init();
    $scope.$broadcast('scroll.refreshComplete');
  };


  $scope.refreshItems = function () {
    $scope.initItems();
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.initItems = function () {

    var cid = Number($state.params.cid);
    $scope.name = $state.params.name;
    //$ionicLoading.show('Loading .....');
    AppService.getVocabularies(cid).then(function (response) {
      $scope.items = response.data;
      //$ionicLoading.hide();
    });
  };

  $scope.trustSrc = function (src) {
    return $sce.trustAsResourceUrl(src);
  };

  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });

  $scope.playVideo = function ($event, youtubeUrl) {


    $scope.modal = $ionicModal.fromTemplate('<ion-modal-view>' +
      ' <ion-header-bar class="bar bar-header bar-royal">' +
      '<h1 class="title">Play Video</h1>' +
      '<button class="button button-clear icon ion-close-circled" ng-click = "closeModal()"></button>' +
      '</ion-header-bar>' +
      '<ion-content>' +
      '<iframe width="100%" height="300px" src="' + $scope.trustSrc(youtubeUrl) + '" frameborder="0" allowfullscreen></iframe>' +

      '</ion-content>' +
      '</ion-modal-view>', {
        scope: $scope,
        animation: 'slide-in-up'
      });

    $scope.modal.show();

    $event.stopPropagation();
    $event.preventDefault();
  }

  $scope.modal = null;
  $scope.items = null;
};