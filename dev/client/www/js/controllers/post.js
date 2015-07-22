angular.module('fcws.controllers')
  .controller('PostCtrl', function($scope, PostListService, $ionicPopup, User, $filter, $stateParams, $rootScope) {

    $scope.loadPost = function() {
      $rootScope.show("Please wait... Processing");
      PostListService.getOne($stateParams.post_id, User.getToken())
        .success(function(data, status, headers, config) {
          $scope.post = data[0];
          $rootScope.hide();
        })
        .error(function(data, status, headers, config) {
          $rootScope.hide();
          $rootScope.notify("Oops something went wrong!! Please try again later");
        });
    };
    $scope.loadPost();

    $scope.Like = function() {
      var username = User.getUserName();
      var indexUser = $scope.post.likes.indexOf(username);
      if (indexUser > -1) {
        $scope.post.likes.splice(indexUser, 1);
      } else {
        $scope.post.likes.push(username);
      }
    };

    $scope.isLike = function() {
      console.log(JSON.stringify($scope.post));
      var username = User.getUserName();
      var indexUser = $scope.post.likes.indexOf(username);
      if (indexUser != -1) {
        return true;
      } else {
        return false;
      }
    };

    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
      $scope.data = {};
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="text" ng-model="data.comment">',
        title: '我也说一句',
        scope: $scope,
        buttons: [{
          text: '取消'
        }, {
          text: '<b>发表</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.comment) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.comment;
            }
          }
        }]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
        if (res) {
          var date = new Date();
          var postdate = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
          $scope.post.comments.push({
            user: User.getUserName(),
            content: res,
            date: postdate
          });
        }
      });
      // $timeout(function() {
      //    myPopup.close(); //close the popup after 3 seconds for some reason
      // }, 3000);
    };
  });
