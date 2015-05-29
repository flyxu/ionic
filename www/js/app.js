// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('zlyc', ['ionic', 'zlyc.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
  //initialize the leanCloud 
   AV.initialize("yl0dfkjdkyg4b6zlmwyzkpijwjlzvw6sgmj3wni828l2qx8p",
   "9f6hzy6baq43bhw3r10ddoqz3c9xp2b1dn50su2w9b5swjhv");

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
  // login page
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
    // onEnter: function($state, User){
    //   User.checkSession().then(function(hasSession) {
    //     if (hasSession) $state.go('home');
    //   });
  })
  // signup page
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
    // onEnter: function($state, User){
    //   User.checkSession().then(function(hasSession) {
    //     if (hasSession) $state.go('home');
    //   });
  })

  .state('home',{
    url: '/home',
    abstrct : true,
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl',
    // don't load the state until we've populated our User, if necessary.
    // resolve: {
    //   populateSession: function(User) {
    //     return User.checkSession();
    //   }
    // },
    // onEnter: function($state, User){
    //   User.checkSession().then(function(hasSession) {
    //     if (!hasSession) $state.go('splash');
    //   });
    // }
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

$urlRouterProvider.otherwise('/login');

})
.constant('SERVER', {
  // if using local server
  //url: 'http://localhost:3000'

  // if using our public heroku server
  url: 'https://ionic-songhop.herokuapp.com'
});

