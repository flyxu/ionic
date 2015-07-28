angular.module('fcws.controllers')
.controller('TrainExamCtrl', function($scope,$state,User,PreviewService) {

  $scope.showDoc = function(doc) {
      $scope.selectedDoc = doc;
      PreviewService
        .init('templates/docModal.html', $scope)
        .then(function(modal) {
          modal.show();
        });
    };
});
