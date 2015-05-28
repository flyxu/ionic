// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('zlyc', ['ionic'])

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

/*
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider

  .state('grid',{
    url: '/grid',
    abstrct : true,
    templateUrl: 'templates/grid.html',
    controller: 'GridCtrl'
  })

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


})

*/
