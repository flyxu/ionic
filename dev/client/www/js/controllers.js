angular.module('fcws.controllers', ['ionic','fcws.services'])

/*
Controller for the Splash page
*/
.controller('SignInCtrl', function($rootScope, $scope, API, $window) {
      // if the user is already logged in, take him to his bucketlist
    if ($rootScope.isSessionActive()) {
      $window.location.href = ('#/sidemenu/qbxx');
    }

    $scope.user = {
        email: "",
        password: ""
    };

    $scope.validateUser = function () {
        var email = this.user.email;
        var password = this.user.password;
        if(!email || !password) {
          $rootScope.notify("Please enter valid credentials");
          return false;
        }
        $rootScope.show('Please wait.. Authenticating');
        API.signin({
            email: email,
            password: password
        }).success(function (data) {
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/sidemenu/qbxx');
        }).error(function (error) {
            $rootScope.hide();
            $rootScope.notify("Invalid Username or password");
        });
    };
})

.controller('SignUpCtrl', function($rootScope, $scope, API, $window) {
  $scope.user = {
        email: "",
        password: "",
        name: ""
    };

    $scope.createUser = function () {
      var email = this.user.email;
        var password = this.user.password;
        var uName = this.user.name;
        if(!email || !password || !uName) {
          $rootScope.notify("Please enter valid data");
          return false;
        }
        $rootScope.show('Please wait.. Registering');
        API.signup({
            email: email,
            password: password,
            name: uName
        }).success(function (data) {
            $rootScope.setToken(email); // create a session kind of thing on the client side
            $rootScope.hide();
            $window.location.href = ('#/sidemenu/qbxx');
        }).error(function (error) {
            $rootScope.hide();
          if(error.error && error.error.code == 11000)
          {
            $rootScope.notify("A user with this email already exists");
          }
          else
          {
            $rootScope.notify("Oops something went wrong, Please try again!");
          }

        });
    };
})

/*
Controller for the Home page
*/
.controller('HomeCtrl', function($scope) {
    // $scope.functions = [
    //     { title: '情报信息' },
    //     { title: '指挥控制' },
    //     { title: '军事训练' },
    //     { title: '教育管理' },
    //     { title: '国防动员' },
    //     { title: '通讯录' }
    //   ];

    // $scope.activeFunction = $scope.functions[Functions.getLastActiveIndex()];

    //  // Called to select the given project
    // $scope.selectFunction = function(project, index) {
    //   $scope.activeFunction = project;
    //   Functions.setLastActiveIndex(index);

    //   switch(index){
    //     case 0: $state.go('home.qbxx');break;
    //     case 1: $state.go('home.zhkz');break;
    //     case 2: $state.go('home.jsxl');break;
    //   }

    //   $ionicSideMenuDelegate.toggleLeft(false);
    // };

})

/*
Controller for our 控制台
*/
.controller('DashboardCtrl', function($scope) {

})

/*
Controller for our 情报信息
*/
.controller('QbxxCtrl', function($scope) {

})

/*
Controller for our 指挥控制
*/
.controller('ZhkzCtrl', function($scope) {

})

/*
Controller for our 军事训练
*/
.controller('JsxlCtrl', function($scope) {

})

/*
Controller for our 教育管理
*/
.controller('JyglCtrl', function($scope) {

})

/*
Controller for our 国防动员
*/
.controller('GfdyCtrl', function($scope) {

})

/*
Controller for our 紧急上报
*/
.controller('Tab1', function($scope) {
  $scope.comments = [
  {
    "name":"刘强",
    "content":"高邮民社正常！",
  },
  {
    "name":"刘强",
    "content":"高邮民社正常！",
  },
  {
  "name":"刘强",
  "content":"高邮民社正常！",
  }
  ];

})

/*
Controller for our 通讯录
*/


.controller('TxlCtrl', function($scope) {

});
