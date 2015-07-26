angular.module('fcws.controllers')
.controller('DocCtrl', function($scope,$stateParams,Docs) {
  var url = $stateParams.url;
  $scope.loadDoc = function() {
    console.log(url);
    Docs.getDocData(url)
    .success(function(data,status, headers, config) {
      $scope.docHtml = data;
    //  console.log($scope.docHtml);
    })
    .error(function(data, status, headers, config) {
      console.log("error: "+ status+" " +data);
    });
  };

  $scope.loadDoc();
});
