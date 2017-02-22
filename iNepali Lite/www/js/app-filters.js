angular.module('iNepali.filters', [])
    .filter('elapsed', function ($filter) {
        return function (seconds) {

            if (seconds == -0.001)
                seconds = 0;

            return new Date(1970, 0, 1).setSeconds(seconds);
        };
    })
    .filter('underscore', function ($filter) {
        return function (txt) {
            return txt.replace(/_/g, ' ');
        };
    })
    .filter('replaceequal', function ($filter) {
        return function (txt) {
            return txt.replace(/ = /g, '<br/>');
        };
    })
     .filter('roman', function ($filter) {
        return function (txt) {
            return txt.substring(txt.indexOf("("), txt.indexOf(")"));
        };
    })
    .filter('isalbum', function ($filter) {
        return function (obj) {
            return obj.isAlbum == undefined;

        };
    });