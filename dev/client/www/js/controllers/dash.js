angular.module('fcws.controllers')
  /*
  Controller for our 控制台
  */
  .controller('DashboardCtrl', function($scope,$rootScope,$log,Posts,User,API,Docs) {

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

    $scope.showDoc = function (doc) {
        Docs.showDoc($scope,doc);
    };

    $scope.$on('$ionicView.beforeEnter', function() {
        $scope.loadRecent();
      });


  //  $scope.loadRecent();


      $scope.loadRecent = function () {
        Posts.getRecent(User.getToken())
          .success(function(data, status, headers, config) {
            $rootScope.show("处理中，请等待....");
            $scope.posts = [];
            $log.log("data.length: " + data.length);
            for (var i = 0; i < data.length; i++) {
              //  if (data[i].isCompleted === false) {
              $scope.posts.push(data[i]);
              //    }
            }
            if ($scope.posts.length === 0) {
              $scope.noData = true;
            } else {
              $scope.noData = false;
            }
            $rootScope.hide();
          }).error(function(data, status, headers, config) {
            $rootScope.hide();
            $rootScope.notify("出错了!!请检查网络后重试");
          });
      };


      $scope.reloadRecent = function() {
        $rootScope.$broadcast('fetchRecent');
        $rootScope.$broadcast('scroll.refreshComplete');
      };

      $scope.lengthLimit = 12;

      $rootScope.$on('fetchRecent', function() {
          $log.log("get fetchRecent broadcast");
          $log.log("user token: " + User.getToken());
          $scope.loadRecent();
      });

      //  $rootScope.$broadcast('fetchRecent');
});
