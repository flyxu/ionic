angular.module('fcws.controllers')
  .controller('PostCtrl', function($scope, Posts, $ionicPopup, User, $filter, $stateParams,
     $rootScope,API,$log,Post,$state) {
    //force angular to create post object
    $scope.post = {
        id: "",
        token: "",
        user: "",
        title: "",
        content: "",
        important: false,
        avatar: "",
        date: "",
        likes: [],
        comments: []
    };


    var id = $stateParams.post_id;

    $scope.loadPost = function() {
      $rootScope.show("Please wait... Processing");
      Post.getPost(id)
        .success(function(data, status, headers, config) {
          $scope.post = data[0];
          $log.log(JSON.stringify($scope.post));
          $rootScope.hide();
        })
        .error(function(data, status, headers, config) {
          $rootScope.hide();
          $rootScope.notify("Oops something went wrong!! Please try again later");
        });
    };
    $scope.loadPost();

    // $rootScope.$on('addComment', function() {
    // }

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
     //console.log(JSON.stringify($scope.post));
      var username = User.getUserName();
      var indexUser = $scope.post.likes.indexOf(username);
      if (indexUser != -1) {
        return true;
      } else {
        return false;
      }
    };

    $scope.isCreater = function() {
      var userToken = User.getToken();
      var postToken = $scope.post.token;
      return (userToken == postToken);
    };

    //delete
    $scope.deletePost = function () {
        $rootScope.show("Please wait... Deleting from List");
        Post.deletePost(id)
            .success(function (data, status, headers, config) {
                $rootScope.hide();
                $rootScope.$broadcast('fetchAll');
                $state.go('sidemenu.posts');
            }).error(function (data, status, headers, config) {
                $rootScope.hide();
                $rootScope.notify("Oops something went wrong!! Please try again later");
            });
    };

  //  modify

    $scope.addComment = function (comment) {
        $rootScope.show("Please wait... Adding comment");

        Post.saveComment(id, comment)
            .success(function (data, status, headers, config) {
                $rootScope.hide();
                $scope.post.comments.push(comment);
                //$rootScope.$broadcast('addComment');
            }).error(function (data, status, headers, config) {
                $rootScope.hide();
                $rootScope.notify("Oops something went wrong!! Please try again later");
            });
    };

    // A confirm dialog
   $scope.showDeleteConfirm = function() {
     var confirmPopup = $ionicPopup.confirm({
       title: '确认删除？',
       template: '您确定要删除这个情报吗?'
     });
     confirmPopup.then(function(res) {
       if(res) {
         $log.log("sure to delete a post");
         $scope.deletePost();
       } else {
        $log.log('cancel delete a post');
       }
     });
   };


    // Triggered on a button click, or some other target
    $scope.makeComment = function() {
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
          $scope.addComment({
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
