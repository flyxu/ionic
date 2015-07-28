angular.module('fcws.controllers')
.controller('SignUpCtrl', function($rootScope, $scope, API, $window,User) {
  $scope.user = {
    email: "",
    password: "",
    name: ""
  };

    $scope.createUser = function() {
      $window.location.href = ('#/sidemenu/dashboard');
    };

//   $scope.createUser = function() {
//     var email = this.user.email;
//     var password = this.user.password;
//     var uName = this.user.name;
//     if (!email || !password || !uName) {
//       $rootScope.notify("请输入完整信息");
//       return false;
//     }
//     $rootScope.show('正在注册，请稍等');
//     API.signup({
//       email: email,
//       password: password,
//       name: uName
//     }).success(function(data) {
// //      $rootScope.setToken(email); // create a session kind of thing on the client side
//       // localStorage.isAuthenticated = true;
//       // localStorage.authToken = data._id;
//       // localStorage.username = data.name;
//       User.loginUser(data._id,data.name,data.email);
//       $rootScope.hide();
//       $window.location.href = ('#/sidemenu/dashboard');
//     }).error(function(error) {
//       $rootScope.hide();
//       if (error.error && error.error.code == 11000) {
//         $rootScope.notify("邮箱已被注册");
//       } else {
//         $rootScope.notify("未知异常，请重试");
//       }
//     });
//     //  $window.location.href = ('#/sidemenu/dashboard');
//   };
});
