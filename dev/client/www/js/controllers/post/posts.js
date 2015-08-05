angular.module('fcws.controllers')
  /*
  Controller for our 情报信息
  */
  .controller('PostsCtrl', function($scope,Posts,$rootScope,$ionicLoading,
    User,API,$log,$ionicModal,$filter,Camera,$cordovaImagePicker,$ionicActionSheet) {

    $scope.newPost = {
      content: '',
      images:[],
      important: false
    };

    $scope.$on('$ionicView.beforeEnter', function() {
        $scope.loadPosts();
      });

    // Create the new  post modal
    $ionicModal.fromTemplateUrl('templates/post/newModal.html', {
      animation: 'slide-in-up',
      scope: $scope
    }).then(function(modal) {
      $scope.newPostModal = modal;
    });

    // show new topic modal
    $scope.showNewPostModal = function() {
      $scope.newPost.content = "";
      $scope.newPost.important = false;
      $scope.newPostModal.show();
    };
    $scope.closeNewPostModal = function() {

      $scope.newPostModal.hide();
      $scope.newPost.content = "";
      $scope.newPost.important = false;
    };

    $scope.lengthLimit = 12;
    $scope.createNewPost = function() {
      var content = $scope.newPost.content;
      var important = false;
      if (!content) {
        $rootScope.notify("请输入情报内容");
        return false;
      }

      if (this.newPost.important)
        important = true;
      var date = new Date();
      var createDate = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
      //  var avatar = User.getUserAvatar();

      var form = {
        // id: id,
        userName: User.getUserName(),
        userId: User.getUserId(),
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


    $scope.showActions = function () {
       // Show the action sheet
          $ionicActionSheet.show({
           buttons: [
             { text: "拍照" },
             { text: "图片库"}
           ],
           titleText: "添加图片",
           cancelText: '取消',
           cancel: function() {
             $scope.images = [];
             $scope.newPost.title = "";
             $scope.newPost.content = "";
           },
           buttonClicked: function(index) {
             if(index === 0){
                $scope.takePhoto();
             }else if (index === 1){
                $scope.pickImage();
             }
             return true;
           }
         });
      };

    // Create the image Modal for show
    $ionicModal.fromTemplateUrl('templates/imageModal.html', {
         scope: $scope,
         animation: 'slide-in-up'
       }).then(function(modal) {
         $scope.imageModel = modal;
       });

       $scope.showImageModal = function(url) {
          //alert("gethere");
         $scope.imageSrc = url;
         $scope.imageModel.show();
       };

       $scope.closeImageModal = function() {
         $scope.imageModel.hide();
       };

    $scope.images = [];
    $scope.takePhoto = function() {
      if($scope.images.length >=3){
        $rootScope.notify("最多上传3张图片");
        return ;
      }
      var imageURI= "img/avatar.jpg";
      $scope.images.push({url:imageURI});
    };

    $scope.removePhoto = function(image) {
        $log.log("removePhoto");
        var indexImage = $scope.images.indexOf(image);
        if (indexImage > -1) {
          $scope.images.splice(indexImage, 1);
        }
    };

    $scope.pickImage = function () {
      if($scope.images.length >=3){
        $rootScope.notify("最多上传3张图片");
        return ;
      }
      var imageURI= "img/avatar.jpg";
      $scope.images.push({url:imageURI});
    };

    //image picker
    // $scope.pickImage = function () {
    //     console.log("haha");
    //     var options = {
    //         maximumImagesCount: 1,
    //         width: 800,
    //         height: 800,
    //         quality: 80
    //     };
    //     $cordovaImagePicker.getPictures(options)
    //         .then(function (results) {
    //             console.log(results);
    //             $scope.images.push({url:results[0]});
    //         }, function (error) {
    //             // error getting photos
    //         });
    // };

    // take photo with camera
    // $scope.takePhoto = function() {
    //   if($scope.images.length >=3){
    //     alert("最多上传三张图片");
    //     return ;
    //   }
    //   Camera.getPicture().then(function(imageURI) {
    //     console.log(imageURI);
    //     $scope.images.push({url:imageURI});
    //   }, function(err) {
    //     console.err(err);
    //     $rootScope.notify("出错了，重试一下");
    //   });
    // };


    $scope.loadPosts = function () {
      Posts.getAll(User.getToken()).success(function(data, status, headers, config) {
        $rootScope.show("处理中,请稍等...");
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


    $scope.reloadPostList = function() {
      $rootScope.$broadcast('fetchAll');
      $rootScope.$broadcast('scroll.refreshComplete');
    };

    $rootScope.$on('fetchAll', function() {
      $log.log("get fetchAll broadcast");
      $log.log("user token: " + User.getToken());
      $scope.loadPosts();
    });

    //$rootScope.$broadcast('fetchAll');


  });
