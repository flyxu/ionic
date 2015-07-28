angular.module('fcws.controllers')
  /*
  Controller for our 情报信息
  */
  .controller('PostsCtrl', function(
    $scope,
    Posts,
    $rootScope,
    $ionicLoading,
    User,
    API,
    $log,
    $ionicModal,
    $filter) {

    $scope.post = {
      title: '',
      content: ''
    };

    // Create the new topic modal that we will use later
    $ionicModal.fromTemplateUrl('templates/post/newModal.html', {
      animation: 'slide-in-up',
      scope: $scope
    }).then(function(modal) {
      $scope.newPostModal = modal;
    });

    // show new topic modal
    $scope.showNewPostModal = function() {
      $scope.newPostModal.show();
    };
    $scope.closeNewPostModal = function() {
      $scope.newPostModal.hide();
    };

    $scope.createNewPost = function() {
      var title = $scope.post.title;
      var content = $scope.post.content;
      var important = false;
      if (!title || !content) {
        $rootScope.notify("Please enter valid credentials");
        return false;
      }

      if (this.post.important)
        important = true;
      var date = new Date();
      var createDate = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
      //  var avatar = User.getUserAvatar();

      var form = {
        // id: id,
        userName: User.getUserName(),
        userId: User.getUserId(),
        title: title,
        content: content,
        important: important,
        createDate: createDate,
        likes: [],
        replyCount: 0
      };

      Posts.saveItem(form, User.getToken())
        .success(function(data, status, headers, config) {
          $rootScope.hide();
          $rootScope.$broadcast('fetchAll');
          $scope.newPostModal.hide();
        })
        .error(function(data, status, headers, config) {
          $rootScope.hide();
          $rootScope.notify("网络连接出错");
        });
    };



    //  $scope.posts = posts;

    // $rootScope.$on('newPost', function() {
    //   $scope.posts= InfoListService.postList();
    // });

    //   function reloadInfoList() {
    //     InfoListService.updateFromServer().then(
    //     function() {
    //       $scope.$broadcast('scroll.refreshComplete');
    //     },
    //     function(error){
    //       $scope.$broadcast('scroll.refreshComplete');
    //       //loadAppErrorHandler(error);
    //       $ionicLoading.show({
    //        template: "Unable to connect to server.<br>Status code: " + error.status,
    //        duration: 2000
    //      });
    //     }
    //   );
    // }

    // $scope.Like = function(selPost) {
    //   var userId = User.getUserId();
    //   var indexUser = selPost.likes.indexOf(userId);
    //   if (indexUser > -1) {
    //     selPost.likes.splice(indexUser, 1);
    //   } else {
    //     selPost.likes.push(userId);
    //   }
    // };

    // $scope.isLike = function(selPost) {
    //   var userId = User.getUserId();
    //   var indexUser = selPost.likes.indexOf(userId);
    //   if (indexUser != -1) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };

    $scope.reloadPostList = function() {
      $rootScope.$broadcast('fetchAll');
      $rootScope.$broadcast('scroll.refreshComplete');
    };

    $rootScope.$on('fetchAll', function() {
      $log.log("get fetchAll broadcast");
      $log.log("user token: " + User.getToken());
      Posts.getAll(User.getToken()).success(function(data, status, headers, config) {
        $rootScope.show("Please wait... Processing");
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
        $rootScope.notify("Oops something went wrong!! Please try again later");
      });
    });

    $rootScope.$broadcast('fetchAll');

    //modify
    //
    // $scope.markCompleted = function (id) {
    //     $rootScope.show("Please wait... Updating List");
    //     API.putItem(id, {
    //         isCompleted: true
    //     }, $rootScope.getToken())
    //         .success(function (data, status, headers, config) {
    //             $rootScope.hide();
    //             $rootScope.doRefresh(1);
    //         }).error(function (data, status, headers, config) {
    //             $rootScope.hide();
    //             $rootScope.notify("Oops something went wrong!! Please try again later");
    //         });
    // };



    // $scope.deleteItem = function (id) {
    //     $rootScope.show("Please wait... Deleting from List");
    //     API.deleteItem(id, $rootScope.getToken())
    //         .success(function (data, status, headers, config) {
    //             $rootScope.hide();
    //             $rootScope.doRefresh(1);
    //         }).error(function (data, status, headers, config) {
    //             $rootScope.hide();
    //             $rootScope.notify("Oops something went wrong!! Please try again later");
    //         });
    // };

  });
