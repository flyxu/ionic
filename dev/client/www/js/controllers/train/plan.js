angular.module('fcws.controllers')
.controller('TrainPlanCtrl', function($scope) {
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
});
