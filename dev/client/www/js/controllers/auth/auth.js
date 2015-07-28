angular.module('fcws.controllers', ['ionic', 'fcws.services'])
.controller('AuthTabCtrl', function($state,User,$log) {

    if ( User.isAuthenticated() === true ) {
        $log.log("the user has been authenticated: "+ User.getUserName());
        $state.go('sidemenu.dashboard');
    }
});