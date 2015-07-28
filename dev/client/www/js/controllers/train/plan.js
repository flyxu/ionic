angular.module('fcws.controllers')
.controller('TrainPlanCtrl', function($scope,PreviewService,$rootScope,Docs) {
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
        $rootScope.show("正在从服务器获取数据");
        Docs.getDocData(doc)
        .success(function(data,status, headers, config) {
          $scope.docHtml= data;
          //  console.log($scope.docHtml);
          $rootScope.hide();
          PreviewService
            .init('templates/docModal.html', $scope)
            .then(function(modal) {
              modal.show();
            });
        })
        .error(function(data, status, headers, config) {
          console.log("error: "+ status+" " +data);
          $rootScope.hide();
          $rootScope.notify("额，貌似出错了");
        });

      };
});
