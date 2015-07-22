angular.module('fcws.controllers', ['ionic', 'fcws.services'])
.controller('AccountCtrl', function($state,User,$log) {

    if ( User.isAuthenticated() === true ) {
        $log.log("the user has been authenticated");
        $state.go('sidemenu.dashboard');
    }
});
