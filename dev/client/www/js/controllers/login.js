angular.module('fcws.controllers', ['ionic', 'fcws.services'])
/*
Controller for the Splash page
*/
.controller('LogInCtrl', function($rootScope, $scope, API, $window) {
      // if the user is already logged in, take him to his bucketlist
    if ($rootScope.isSessionActive()) {
      $window.location.href = ('#/sidemenu/info');
    }

  // $scope.user = {
  //   email: "",
  //   password: ""
  // };

  $scope.validateUser = function() {
  //   var email = this.user.email;
  //   var password = this.user.password;
  //   if (!email || !password) {
  //     $rootScope.notify("Please enter valid credentials");
  //     return false;
  //   }
  //   $rootScope.show('Please wait.. Authenticating');
  //   API.signin({
  //     email: email,
  //     password: password
  //   }).success(function(data) {
  //     $rootScope.setToken(email); // create a session kind of thing on the client side
  //     $rootScope.hide();
  //     $window.location.href = ('#/sidemenu/qbxx');
  //   }).error(function(error) {
  //     $rootScope.hide();
  //     $rootScope.notify("Invalid Username or password");
  //   });
       $window.location.href = ('#/sidemenu/info');
   };
});
