angular.module('fcws.services', [])
.factory('API', function ($rootScope, $http, $ionicLoading, $window,SERVER) {
        $rootScope.show = function (text) {

            $rootScope.loading = $ionicLoading.show({
                template: text ? text : 'Loading',
            });
        };

        $rootScope.hide = function () {
            $ionicLoading.hide();
        };

        $rootScope.logout = function () {
            $rootScope.setToken("");
            $window.location.href = '#/auth/signin';

        };

        $rootScope.notify =function(text){
            $rootScope.show(text);
            $window.setTimeout(function () {
              $rootScope.hide();
            }, 999);
        };

        $rootScope.setToken = function (token) {
            return ($window.localStorage.token = token);
        };

        $rootScope.getToken = function () {
            return $window.localStorage.token;
        };



        return {
            isSessionActive : function () {
            return $window.localStorage.token ? true : false;
             },
            signin: function (form) {
                return $http.post(SERVER.url+'/api/v1/fcws/auth/login', form);
            },
            signup: function (form) {
                return $http.post(SERVER.url+'/api/v1/fcws/auth/register', form);
            }
        };
});
