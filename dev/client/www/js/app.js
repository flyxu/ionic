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
      templateUrl: "templates/auth/tab.html",
      controller: "AuthTabCtrl"
    })

  // login page
  .state('auth.signin', {
    url: "/signin",
    views: {
      'signinTab': {
        templateUrl: 'templates/auth/signin.html',
        controller: 'LogInCtrl'
      }
    }
  })

  // signup page
  .state('auth.signup', {
    url: '/signup',
    views: {
      'signupTab': {
        templateUrl: 'templates/auth/signup.html',
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
        templateUrl: 'templates/dashboard/index.html',
        controller: 'DashboardCtrl',
      }
    }
  })

  .state('sidemenu.posts', {
    url: '/posts',
    views: {
      'menuContent': {
        templateUrl: 'templates/post/list.html',
        controller: 'PostsCtrl'
      }
    }
  })

  .state('sidemenu.post', {
    url: '/posts/:post_id',
    views: {
      'menuContent': {
        templateUrl: "templates/post/detail.html",
        controller: 'PostCtrl',
      }
    }
  })

  .state('sidemenu.new', {
    url: "/new",
    views: {
      'menuContent': {
        templateUrl: "templates/post/new.html",
        controller: 'NewCtrl'
      }
    }
  })

  .state('sidemenu.control', {
    url: '/control',
    views: {
      'menuContent': {
        templateUrl: 'templates/control/index.html',
        controller: 'ControlCtrl'
      }
    }
  })

  .state('sidemenu.train', {
    url: '/train',
    views: {
      'menuContent': {
        templateUrl: 'templates/train/tab.html',
        controller: 'TrainCtrl'
      }
    }
  })

  .state('sidemenu.train.plan', {
    url: '/plan',
    views: {
      'plan': {
        templateUrl: 'templates/train/plan.html',
        controller: 'TrainPlanCtrl',
      }
    }
  })

  .state('sidemenu.train.rule', {
    url: '/rule',
    views: {
      'rule': {
        templateUrl: 'templates/train/rule.html',
        controller: 'TrainRuleCtrl',
      }
    }
  })

  .state('sidemenu.train.search', {
    url: '/search',
    views: {
      'search': {
        templateUrl: 'templates/train/search.html',
        controller: 'TrainSearchCtrl',
      }
    }
  })

  .state('sidemenu.train.exam', {
    url: '/exam',
    views: {
      'exam': {
        templateUrl: 'templates/train/exam.html',
        controller: 'TrainExamCtrl',
      }
    }
  })

  .state('sidemenu.doc', {
    url: '/doc/:url',
    views: {
      'menuContent': {
          templateUrl: "templates/doc.html",
          controller: 'DocCtrl',
        }
      }
  })

  .state('sidemenu.education', {
    url: '/education',
    views: {
      'menuContent': {
        templateUrl: 'templates/education/index.html',
        controller: 'EducationCtrl'
      }
    }
  })

  .state('sidemenu.defence', {
    url: '/defence',
    views: {
      'menuContent': {
        templateUrl: 'templates/defence/index.html',
        controller: 'DefenceCtrl',
      }
    }
  })

  .state('sidemenu.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact/index.html',
        controller: 'ContactCtrl',
      }
    }
  })

  .state('sidemenu.config', {
    url: '/config',
    views: {
      'menuContent': {
        templateUrl: 'templates/config.html',
        controller: 'ConfigCtrl',
      }
    }
  });






  $urlRouterProvider.otherwise('/auth/signin');

})

.constant('SERVER', {
  // if using local server
  api: 'http://localhost:9804/api/v1',
  docs:'http://localhost:9804/docs'

  // if using our public heroku server
  //  url: 'http://nemoworks.info:9804/api/v1/'
});
