var BarkhariController = function ($scope, $rootScope, $state, $timeout) {

 $scope.barkhariClicked = function (idx) {
    $rootScope.currentItem = { 'char': $scope.char + idx };
    $rootScope.play_ext();
  };

  $scope.listItemClicked = function (idx) {
    $rootScope.currentItem = { 'char': $scope.char + '0' };
  };

  $scope.init = function () {
    $scope.data = $rootScope.consonents;
    $rootScope.currentItem = $scope.data[$scope.indx];
    $rootScope.isBarkhari = true;
  };

  $scope.initBarkhari = function () {
    $rootScope.isBarkhari = false;
    //$scope.char = $stateParams.char;
    $scope.char = $state.params.char;
    $timeout(function () { $rootScope.showInterstitial(); }, 20000)
  };

  $scope.currentIndex = 0;
};