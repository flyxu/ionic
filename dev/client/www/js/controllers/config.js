angular.module('fcws.controllers')
.controller('ConfigCtrl', function($scope,$state) {
    $scope.logout = function () {
      localStorage.clear();
      localStorage.isAuthenticated = false;
      $state.go('auth.signin');
    };
});
