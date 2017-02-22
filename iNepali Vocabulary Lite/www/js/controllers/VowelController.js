
var VowelController = function ($scope, $rootScope) {


  $scope.init = function () {
    $rootScope.data = $rootScope.vowels;
    //$rootScope.currentItem = $scope.data[$scope.indx];
    $rootScope.isBarkhari = false;
  };

};