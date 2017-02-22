
var NumberController = function ($scope, $rootScope) {

  $scope.init = function () {
    $rootScope.data = $rootScope.numbers;
    $rootScope.isBarkhari = false;
  };

};