// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('zlyc', ['ionic', 'zlyc.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){

$stateProvider
    .state('auth', {
        url: "/auth",
        abstract: true,
        templateUrl: "templates/auth.html"
    })

    // login page
    .state('auth.signin', {
        url: "/signin",
        views: {
            'auth-signin': {
                templateUrl: 'templates/auth-signin.html',
                controller: 'SignInCtrl'
            }
        }
    })

    // signup page
    .state('auth.signup', {
      url: '/signup',
      views: {
          'auth-signup': {
              templateUrl: 'templates/auth-signup.html',
              controller: 'SignUpCtrl'
          }
      }
    })

    .state('home',{
      url: '/home',
      abstrct : true,
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl',
    })

    .state('qbxx',{
      url: '/qbxx',
      templateUrl: 'templates/qbxx.html',
      controller: 'QbxxCtrl'

    })

    .state('zhkz',{
      url: '/zhkz',
      templateUrl: 'templates/zhkz.html',
      controller: 'ZhkzCtrl'
    })

    .state('jsxl',{
      url: '/jsxl',
      templateUrl: 'templates/jsxl.html',
      controller: 'JsxlCtrl'
    })

     .state('jygl',{
      url: '/jygl',
      templateUrl: 'templates/jygl.html',
      controller: 'JyglCtrl'
    })

    .state('gfdy',{
      url: '/gfdy',
      templateUrl: 'templates/gfdy.html',
      controller: 'GfdyCtrl'
    })

    .state('txl',{
      url: '/txl',
      templateUrl: 'templates/txl.html',
      controller: 'TxlCtrl'
    })

  $urlRouterProvider.otherwise('/auth/signin');

})

.constant('SERVER', {
    // if using local server
  //url: 'http://localhost:3000'

  // if using our public heroku server
  url: 'http://192.168.1.120:9804'
});

