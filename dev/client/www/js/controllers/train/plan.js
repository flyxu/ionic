angular.module('fcws.controllers')
.controller('TrainPlanCtrl', function($scope,PreviewService) {
    $scope.docs = [
      {
        name: "训练通知",
        url: "train\/notifications\/train-notice.html"
      },
      {
        name: "专武民兵干部集训通知",
        url: "train\/notifications\/assemble-notice.html"
      }
    ];

    $scope.showDoc = function(doc) {
        $scope.selectedDoc = doc;
        PreviewService
          .init('templates/docModal.html', $scope)
          .then(function(modal) {
            modal.show();
          });
      };
});
