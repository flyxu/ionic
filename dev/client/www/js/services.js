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

        $rootScope.isSessionActive =function () {
        return $window.localStorage.token ? true : false;
        };

        return {
            signin: function (form) {
                return $http.post(SERVER.url+'/api/v1/fcws/auth/login', form);
            },
            signup: function (form) {
                return $http.post(SERVER.url+'/api/v1/fcws/auth/register', form);
            },
            getAll: function (email) {
                return $http.get(base+'/api/v1/fcws/data/list', {
                    method: 'GET',
                    params: {
                        token: email
                    }
                });
            },
            getOne: function (id, email) {
                return $http.get(base+'/api/v1/fcws/data/item/' + id, {
                    method: 'GET',
                    params: {
                        token: email
                    }
                });
            },
            saveItem: function (form, email) {
                return $http.post(base+'/api/v1/fcws/data/item', form, {
                    method: 'POST',
                    params: {
                        token: email
                    }
                });
            },
            putItem: function (id, form, email) {
                return $http.put(base+'/api/v1/fcws/data/item/' + id, form, {
                    method: 'PUT',
                    params: {
                        token: email
                    }
                });
            },
            deleteItem: function (id, email) {
                return $http.delete(base+'/api/v1/fcws/data/item/' + id, {
                    method: 'DELETE',
                    params: {
                        token: email
                    }
                });
            }
        };
});
