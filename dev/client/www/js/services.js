angular.module('zlyc.services', [])
.factory('API', function ($rootScope, $http, $ionicLoading, $window,SERVER) {
        $rootScope.show = function (text) {
            $rootScope.loading = $ionicLoading.show({
                content: text ? text : 'Loading',
                animation: 'fade-in',
                showBackdrop: true,
                maxWidth: 200,
                showDelay: 0
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
            }, 1999);
        };
 
        $rootScope.setToken = function (token) {
            return $window.localStorage.token = token;
        }
 
        $rootScope.getToken = function () {
            return $window.localStorage.token;
        }
 
        $rootScope.isSessionActive = function () {
            return $window.localStorage.token ? true : false;
        }
 
        return {
            signin: function (form) {
                return $http.post(SERVER.url+'/api/v1/zlyc/auth/login', form);
            },
            signup: function (form) {
                return $http.post(SERVER.url+'/api/v1/zlyc/auth/register', form);
            }
        }
    })
            