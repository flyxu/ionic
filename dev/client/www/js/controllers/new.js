angular.module('fcws.controllers')
  .controller('NewCtrl', function($scope,$rootScope,API,User,$filter,Posts,$window) {
      $scope.post={
        user: "",
        title: "",
        content: "",
        important: "",
        date: "",
        likes: [],
        replyCount: 0
      };

      $scope.createNewPost = function () {
          var title = $scope.post.title;
          var content = $scope.post.content;
          var important = false;
          if(!title || !content){
            $rootScope.notify("Please enter valid credentials");
            return false;
          }

          if(this.post.important)
            important = true;
          var date = new Date();
          var createDate = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
        //  var avatar = User.getUserAvatar();

          var form = {
                // id: id,
                 userName: User.getUserName(),
                 userId: User.getUserId(),
                 title : title,
                 content: content,
                 important: important,
                 createDate:createDate,
                 likes:[],
                 replyCount: 0
            };

          Posts.saveItem(form, User.getToken())
              .success(function (data, status, headers, config) {
                  $rootScope.hide();
                  $rootScope.$broadcast('fetchAll');
                  $window.location.href = ('#/sidemenu/posts');
              })
              .error(function (data, status, headers, config) {
                  $rootScope.hide();
                  $rootScope.notify("Oops something went wrong!! Please try again later");
              });
          // InfoListService.addPost(
          //   {  id: id,
          //      user: user,
          //      title : title,
          //      content: content,
          //      important: important,
          //      avatar: avatar,
          //      date:postdate,
          //      likes:[],
          //      comments:[]
          //   });

          //console.log(title+" "+ content+" "+important+" "+user+" "+postdate+" "+id);
      };
  });
