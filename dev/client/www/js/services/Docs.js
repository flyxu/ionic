angular.module('fcws.services')
  .factory('Docs', function($http,SERVER) {
      return {
        getDocData: function(url) {
          var docUrl = SERVER.docs+ '/' + url;
          console.log(docUrl);
          return $http.get(docUrl);
        }
      };
  });
