angular.module('fcws.controllers')
.controller('ConfigCtrl', function($scope,$state,User) {
    $scope.logout = function () {
      User.logoutUser();
      $state.go('auth.signin');
    };
});
