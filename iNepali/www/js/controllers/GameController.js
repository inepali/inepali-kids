
var GameController = function ($scope, $rootScope, $timeout, $interval, AppService) {
    /* Copied from internet*/

    var selectedCard = null, MAX_SCORE, WAIT = false;
    var matchCount;

    $scope.select = function (card) {
        if (card === selectedCard || card.isFound || WAIT)
            return;

        card.isFlipped = true;

        $rootScope.playSound (card);

        if (selectedCard) {
            if (selectedCard.data.char === card.data.char) {
                correct(card);
            } else {
                incorrect(card);
            }
        } else {
            selectedCard = card;
        }
    }


    function flip(card, i, callback) {
        $timeout(function () {
            card.isFlipped = false;
            WAIT = false;
            if (callback) callback();
        }, 10 * (i || 100));
    }

    function incorrect(card) {
        WAIT = true;
        flip(card);
        flip(selectedCard, 100, function () {
            selectedCard = null;
        });
        $scope.score -= 4;
    }

    function correct(card) {
        card.isFlipped = true;
        card.isFound = true;
        selectedCard.isFound = true;
        selectedCard = null;
        $scope.score += 10;
        matchCount++;

        if ( matchCount=== MAX_SCORE) {
            $timeout(gameOver, 300);
        }
    }

    function gameOver() {
        $scope.isYouWin = true;
        $interval.cancel($scope.interval);
        $timeout(function () { $rootScope.showInterstitial(); }, 5000);
    }

    /* end of copy */

    var isExits = function (arr, obj) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].data.char === obj.char)
            {
                return true;
                break;
            }
        }
        return false;
    };

    $scope.initBySize = function (r, c) {
        $scope.cards = null;
        $scope.rowSize = r;
        $scope.columnSize = c;
        $scope.init();

    };

    $scope.init = function () {

        $interval.cancel($scope.interval);
        MAX_SCORE = ($scope.columnSize * $scope.rowSize) / 2;
        $scope.cards = [];
        $scope.score = 0;
        $scope.duration = 0;

        matchCount = 0;
        $scope.isYouWin = false;

        var items = [];
        for (var j = 0; j < $scope.columnSize * $scope.rowSize; j++) {

            // Vowel or Consonent ( 0 - vowel, 1 consonent)
            var whichOne = Math.round(Math.random());
            var randChar;

            if (whichOne == 0) {
                // get Random number from vowel
                var vRand = Math.floor((Math.random() * 12));
                randChar = $rootScope.vowels[vRand];
                randChar.img = 'a' + vRand + ".gif";
                randChar.audio = 'a' + vRand + ".mp3";
                randChar.isBarkhari = false;
            } else {
                // get Random from consonents
                var cRand = Math.floor((Math.random() * 36));
                var idx = Math.floor((Math.random() * 12));

                if (cRand == 4 || cRand == 9 || cRand == 14)
                    idx = 0;

                randChar = $rootScope.consonents[cRand]
                randChar.img = randChar.char + idx + ".gif";
                randChar.audio = randChar.char + idx + ".mp3";
                randChar.isBarkhari = true;
            }

            //let's check it is already exits or not
            if (isExits(items, randChar)) {
                j--;
            } else {
                randChar.id = Math.floor((Math.random() * 100));
                items.push({ 'isFlipped': false, 'isFound': false, 'data': randChar });
                randChar.id = Math.floor((Math.random() * 100));
                items.push({ 'isFlipped': false, 'isFound': false, 'data': randChar })
                j++;
            }

        }


        // Let's shuffle the list
        var shuffled = AppService.shuffleArray(items);
        //$scope.cardsx = shuffled;

        //console.log($scope.cardsx);
        // Let's allocate them into row and column
        var m = 0;

        for (var i = 0; i < $scope.rowSize; i++) {
            var row = [];
            for (var j = 0; j < $scope.columnSize; j++) {
                var item = shuffled[m];
                //item.r = i; 
                //item.c = j;
                row.push(item);
                m++;
            }
            $scope.cards.push(row);
        }

        $scope.interval = $interval(function () {
        $scope.duration++;;
    }, 1000);
    }

    $scope.isFlipped = false;

    $scope.cards = null;

    $scope.vowelCount = 12;
    $scope.consonentCount = 36;

    $scope.counter = Array;
    $scope.rowSize = 5;
    $scope.columnSize = 4;
    $scope.pairCount = 0;
    $scope.score = 0;
    $scope.duration = 0;
    $scope.isYouWin = false;


};