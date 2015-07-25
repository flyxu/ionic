// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('fcws', [
  'ionic',
  'fcws.controllers',
  'fcws.services',
  'fcws.utils'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('auth', {
      url: "/auth",
      abstract: true,
      templateUrl: "templates/auth.html",
      controller: "AccountCtrl"
    })

  // login page
  .state('auth.signin', {
    url: "/signin",
    views: {
      'auth-signin': {
        templateUrl: 'templates/auth-signin.html',
        controller: 'LogInCtrl'
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


  .state('sidemenu', {
    url: '/sidemenu',
    abstract: true,
    templateUrl: 'templates/sidemenu.html',
    controller: 'SidemenuCtrl',
  })

  .state('sidemenu.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-dash.html',
        controller: 'DashboardCtrl',
      }
    }
  })

  .state('sidemenu.posts', {
    url: '/posts',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-posts.html',
        controller: 'PostsCtrl',
        // resolve: {
        //       posts :function (Posts) {
        //         return Posts.infoList();
        //     }
        //   }
      }
    }
  })

  .state('sidemenu.post', {
    url: '/posts/:post_id',
    views: {
      'menuContent': {
        templateUrl: "templates/post-detail.html",
        controller: 'PostCtrl',
      }
    }
  })

  .state('sidemenu.new', {
    url: "/new",
    views: {
      'menuContent': {
        templateUrl: "templates/post-new.html",
        controller: 'NewCtrl'
      }
    }
  })

  .state('sidemenu.zhkz', {
    url: '/zhkz',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-zhkz.html',
        controller: 'ZhkzCtrl'
      }
    }
  })

  .state('sidemenu.jsxl', {
    url: '/jsxl',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-jsxl.html',
        controller: 'JsxlCtrl'
      }
    }
  })

  .state('sidemenu.jygl', {
    url: '/jygl',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-jygl.html',
        controller: 'JyglCtrl'
      }
    }
  })



  .state('sidemenu.gfdy', {
    url: '/gfdy',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-gfdy.html',
        controller: 'GfdyCtrl',
      }
    }
  })

  .state('sidemenu.tabs', {
    url: '/tabs',
    views: {
      'menuContent': {
        templateUrl: 'templates/tabs.html',
        controller: 'TabsCtrl',
      }
    }
  })

  .state('sidemenu.tabs.tzjh', {
    url: '/tzjh',
    views: {
      'tzjh': {
        templateUrl: 'templates/tzjh.html',
        controller: 'TzjhCtrl',
      }
    }
  })

  .state('sidemenu.tabs.xlfg', {
    url: '/xlfg',
    views: {
      'xlfg': {
        templateUrl: 'templates/xlfg.html',
        controller: 'XlfgCtrl',
      }
    }
  })

  .state('sidemenu.tabs.zlcx', {
    url: '/zlcx',
    views: {
      'zlcx': {
        templateUrl: 'templates/zlcx.html',
        controller: 'ZlcxCtrl',
      }
    }
  })

  .state('yulan', {
    url: "/yulan",
    templateUrl: "templates/yulan.html",
    controller: 'YulanCtrl',
  })


  .state('sidemenu.tabs.xlkh', {
    url: '/xlkh',
    views: {
      'xlkh': {
        templateUrl: 'templates/xlkh.html',
        controller: 'XlkhCtrl',
      }
    }
  })


  .state('sidemenu.txl', {
    url: '/txl',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-txl.html',
        controller: 'TxlCtrl',
      }
    }
  })

  .state('sidemenu.config', {
    url: '/config',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-config.html',
        controller: 'ConfigCtrl',
      }
    }
  });




  $urlRouterProvider.otherwise('/auth/signin');

})

.constant('SERVER', {
  // if using local server
  api: 'http://localhost:9804/api/v1'

  // if using our public heroku server
  //  url: 'http://nemoworks.info:9804/api/v1/'
});
