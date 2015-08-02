angular.module('fcws.controllers')
.controller('TrainExamCtrl', function($scope,$state,User,Docs) {
  $scope.showDoc = function (doc) {
      Docs.showDoc($scope,doc);
  };

});
