var ConsonentController = function ($scope, $rootScope) {

  $scope.init = function () {
    $rootScope.data = $rootScope.consonents;
    //$rootScope.currentItem = $scope.data[$scope.indx];
    $rootScope.isBarkhari = false;
  };


};