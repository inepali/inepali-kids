angular.module('iNepali.routings', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'ApplicationController'
  })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
  .state('app.welcome', {
      url: '/welcome',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
  })
      .state('app.numbers', {
          url: '/numbers',
          views: {
              'menuContent': {
                  templateUrl: 'templates/numbers.html',
                  controller: 'NumberController'
              }
          }
      })
    .state('app.consonents', {
      url: '/consonents',
      views: {
        'menuContent': {
          templateUrl: 'templates/consonents.html',
          controller: 'ConsonentController'
        }
      }
    })
    .state('app.barkhari', {
      url: '/barkhari',
      views: {
        'menuContent': {
          templateUrl: 'templates/barkhari.html',
          controller: 'BarkhariController'
        }
      }
    })
    .state('app.barkhari_char', {
      url: '/barkhari/:char',
      views: {
        'menuContent': {
          templateUrl: 'templates/barkhari_char.html',
          controller: 'BarkhariController'
        }
      }
    })
    .state('app.vocmenu', {
      url: '/vocmenu',
      views: {
        'menuContent': {
          templateUrl: 'templates/vocabulary-menu.html',
          controller: 'VocabularyController'
        }
      }
    })
    .state('app.vocabulary', {
      url: '/vocabulary/:cid/:name',
      views: {
        'menuContent': {
          templateUrl: 'templates/vocabulary.html',
          controller: 'VocabularyController'
        }
      }
    })
    .state('app.game', {
      url: '/game',
      views: {
        'menuContent': {
          templateUrl: 'templates/game.html',
          controller: 'GameController'
        }
      }
    })

    .state('app.vowels', {
      url: '/vowels',
      views: {
        'menuContent': {
          templateUrl: 'templates/vowels.html',
          controller: 'VowelController'
        }
      }
    })
    .state('app.national-anthem', {
      url: '/national-anthem',
      views: {
        'menuContent': {
          templateUrl: 'templates/national-anthem.html'
        }
      }
    })
    .state('app.video', {
      url: '/video',
      views: {
        'menuContent': {
          templateUrl: 'templates/videos.html',
          controller: 'VideoController'
        }
      }
    })
    .state('app.writing', {
      url: '/writing',
      views: {
        'menuContent': {
          templateUrl: 'templates/writing.html',
          controller: 'PainterController'
        }
      }
    })
    .state('app.player', {
      url: '/player/:indx',
      views: {
        'menuContent': {
          templateUrl: 'templates/video-player.html',
          controller: 'VideoController'
        }
      }
    })
     .state('app.songs', {
      url: '/songs',
      views: {
        'menuContent': {
          templateUrl: 'templates/songs.html',
          controller: 'SongController'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/welcome');
});