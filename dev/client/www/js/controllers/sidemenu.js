angular.module('fcws.controllers')
.controller('SidemenuCtrl', function($scope,User) {
    $scope.username = User.getUserName();
});
