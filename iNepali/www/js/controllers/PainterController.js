var PainterController = function ($scope) {
    $scope.undo = function () {
        this.version--;
    };

    $scope.clear = function () {
        this.version = 0;
        try {
            $timeout(function () { $rootScope.showInterstitial(); }, 5000)
        } catch (err) {
            console.log(err.message);
        }
    };

    $scope.upload = function () {

    }

    $scope.changeLineWidth = function(n){
        $scope.selectedLineWidth = $scope.selectedLineWidth + n;
    }
    

    var downloadCanvas = function (link, canvas, filename) {
        link.href = canvas.toDataURL();
        link.download = filename;
    };

    $scope.download = function (_link) {
        var canvas = $("iNepaliStrokeCanvas");
        downloadCanvas(_link, canvas, 'test.png');
    };

    $scope.version = 0;
    $scope.selectedLineWidth = 5;
    $scope.selectedColor = '#CF3759';
};