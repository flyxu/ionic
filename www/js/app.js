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

// .controller('LoginCtrl',function($scope){
//   AV.initialize("yl0dfkjdkyg4b6zlmwyzkpijwjlzvw6sgmj3wni828l2qx8p",
//    "9f6hzy6baq43bhw3r10ddoqz3c9xp2b1dn50su2w9b5swjhv");
//   // 初始化 param1：应用 id、param2：应用 key
//   var TestObject = AV.Object.extend("TestObject");
//   var testObject = new TestObject();
//   testObject.save({foo: "bar"}, {
//      success: function(object) {
//      alert("LeanCloud works!");
//    }
   
//   });
// })


.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  // splash page
  .state('splash', {
    url: '/',
    templateUrl: 'templates/splash.html',
    controller: 'SplashCtrl'
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

  $urlRouterProvider.otherwise('/');
  /*

  .state('grid.qbxx'{
    url: '/qbxx',
    views:{
      'grid-qbxx':{
        templateUrl: 'templates/qbxx.html',
        controller: 'QbxxCtrl'
      }
    }
  })

  .state('grid.zhkz'{
    url: '/zhkz',
    views:{
      'grid-zhkz':{
        templateUrl: 'templates/zhkz.html',
        controller: 'ZhkzCtrl'
      }
    }
  })

  .state('grid.jsxl'{
    url: '/jsxl',
    views:{
      'grid-jsxl':{
        templateUrl: 'templates/jsxl.html',
        controller: 'JsxlCtrl'
      }
    }
  })

  .state('grid.jygl'{
    url: '/jygl',
    views:{
      'grid-jygl':{
        templateUrl: 'templates/jygl.html',
        controller: 'JyglCtrl'
      }
    }
  })

  .state('grid.gfdy'{
    url: '/gfdy',
    views:{
      'grid-gfdy':{
        templateUrl: 'templates/gfdy.html',
        controller: 'GfdyCtrl'
      }
    }
  })

  .state('grid.txl'{
    url: '/txl',
    views:{
      'grid-txl':{
        templateUrl: 'templates/txl.html',
        controller: 'TxlCtrl'
      }
    }
  })

  */
})
.constant('SERVER', {
  // if using local server
  //url: 'http://localhost:3000'

  // if using our public heroku server
  url: 'https://ionic-songhop.herokuapp.com'
});

