// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('zlyc', ['ionic', 'zlyc.controllers','zlyc.services'])

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
        templateUrl: "templates/auth.html",
        onEnter: function(API,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (API.isSessionActive()) {
                      $state.go('home.qbxx');
                  }
                }
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
      abstract: true,
      templateUrl: 'templates/home.html',
       onEnter: function(API,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (!API.isSessionActive()) {
                      $state.go('auth.signin');
                  }
                }
      //controller: 'HomeCtrl',
    })

    .state('home.qbxx',{
      url: '/qbxx',
      views: {
          'menuContent':{
              templateUrl: 'templates/home-qbxx.html',
              controller: 'QbxxCtrl',
              onEnter: function($rootScope,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (!$rootScope.isSessionActive()) {
                      $state.go('auth.signin');
                  }
                }
            }
        }
    })

    .state('home.zhkz',{
      url: '/zhkz',
      views: {
          'menuContent':{
              templateUrl: 'templates/home-zhkz.html',
              controller: 'ZhkzCtrl',
              onEnter: function($rootScope,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (!$rootScope.isSessionActive()) {
                      $state.go('auth.signin');
                  }
                }
            }
          }
    })

    .state('home.jsxl',{
      url: '/jsxl',
      views: {
          'menuContent':{
              templateUrl: 'templates/home-jsxl.html',
              controller: 'JsxlCtrl',
              onEnter: function($rootScope,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (!$rootScope.isSessionActive()) {
                      $state.go('auth.signin');
                  }
                }
            }
          }
    })

     .state('home.jygl',{
      url: '/jygl',
      views: {
          'menuContent':{
              templateUrl: 'templates/home-jygl.html',
              controller: 'JyglCtrl',
              onEnter: function($rootScope,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (!$rootScope.isSessionActive()) {
                      $state.go('auth.signin');
                  }
                }
            }
          }
    })

    .state('home.gfdy',{
      url: '/gfdy',
      views: {
          'menuContent':{
              templateUrl: 'templates/home-gfdy.html',
              controller: 'GfdyCtrl',
              onEnter: function($rootScope,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (!$rootScope.isSessionActive()) {
                      $state.go('auth.signin');
                  }
                }
            }
          }
    })

    .state('home.txl',{
      url: '/txl',
      views: {
          'menuContent':{
              templateUrl: 'templates/home-txl.html',
              controller: 'TxlCtrl',
              onEnter: function($rootScope,$state){
                  // if the user is already logged in, take him to his bucketlist
                  if (!$rootScope.isSessionActive()) {
                      $state.go('auth.signin');
                  }
                }
            }
          }
    })

  $urlRouterProvider.otherwise('/auth/signin');

})

.constant('SERVER', {
    // if using local server
  //url: 'http://localhost:3000'

  // if using our public heroku server
  url: 'http://172.28.44.111:9804'
});

