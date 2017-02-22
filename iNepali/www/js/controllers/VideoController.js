
var VideoController = function ($scope, $rootScope, $sce, $state, AppService) {

$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  };

  $scope.init = function()
{
    var indx = Number($state.params.indx);
    $rootScope.videos.some(function(item, index, arr){
        if (item.id == indx)
            return $scope.selectedVdo = item;
    })

    //$scope.selectedVdo = $rootScope.videos[indx];
};

$scope.refreshVideo = function(){
   AppService.getVideos().then(function(response){
     $rootScope.videos = response.data;
     $scope.$broadcast('scroll.refreshComplete');
   });
  
};

  $scope.changeTab = function(n)
  {
    if (n == 0)
    {
      $scope.selectedTab = 0;
      $scope.type = "L";
    }  else if (n == 1) {
      $scope.selectedTab = 1;
      $scope.type = "S";
    }  else {
      $scope.selectedTab = 2;
      $scope.type = "V";
    }
  }

  $scope.type = "L";
  $scope.selectedTab = 0;
  $scope.stroke = false;

};