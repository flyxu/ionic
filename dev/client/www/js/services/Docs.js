angular.module('fcws.services')
  .factory('Docs', function($http,SERVER,$rootScope,API) {
      return {
        getDocDataFromServer: function(url) {
          var docUrl = SERVER.docs+ '/' + url;
          console.log(docUrl);
          return $http.get(docUrl);
        },
        getDocData: function (selectedDoc) {
          // get data
          var url = selectedDoc.url;
          console.log(url);
          return this.getDocDataFromServer(url);
        }
      };
  });
