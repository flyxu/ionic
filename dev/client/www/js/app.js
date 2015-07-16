// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('fcws', [
  'ionic',
  'fcws.controllers',
  'fcws.services'])

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
      //controller: 'HomeCtrl',
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
        resolve: {
              posts :function (InfoListService) {
                return InfoListService.infoList();
            }
          }
      }
    }
  })

  .state('sidemenu.post', {
    url: '/posts/:post_id',
    views: {
      'menuContent': {
        templateUrl: "templates/post-detail.html",
        controller: 'PostCtrl',
        resolve: {
            post: function($stateParams, InfoListService) {
              return InfoListService.getPost($stateParams.post_id);
            }
          }
      }
    }
  })

  .state('sidemenu.new', {
    url: "/new",
    views: {
      'menuContent': {
        templateUrl: "templates/post-new.html",
        controller: 'ZhkzCtrl'
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

  .state('sidemenu.txl', {
    url: '/txl',
    views: {
      'menuContent': {
        templateUrl: 'templates/home-txl.html',
        controller: 'TxlCtrl',
      }
    }
  });




  $urlRouterProvider.otherwise('/auth/signin');

})

.constant('SERVER', {
  // if using local server
  url: 'http://localhost:9804'

  // if using our public heroku server
  //  url: 'http://nemoworks.info:9804'
});
