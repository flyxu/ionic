angular.module('fcws.controllers')
.controller('SidemenuCtrl', function($scope,User,$rootScope) {
    $scope.username = User.getUserName();
    $rootScope.$on('login', function() {
      $scope.username = User.getUserName();
    });
});
