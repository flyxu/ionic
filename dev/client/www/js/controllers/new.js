angular.module('fcws.controllers')
  .controller('NewCtrl', function($scope,$rootScope,API,User,$filter,PostListService,$window) {
      $scope.post={
        user: "",
        title: "",
        content: "",
        important: "",
        date: "",
        comments: [],
        likes: []
      };

      $scope.createNewPost = function () {
          var title = $scope.post.title;
          var content = $scope.post.content;
          var important = false;
          if(!title || !content){
            $rootScope.notify("Please enter valid credentials");
            return false;
          }
          //var id = PostListService.getListLength()+1+"";
          var user = User.getUserName();
          if(this.post.important)
            important = true;
          var date = new Date();
          var postdate = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
        //  var avatar = User.getUserAvatar();

          var form = {
                // id: id,
                 user: user,
                 title : title,
                 content: content,
                 important: important,
                 date:postdate,
                 likes:[],
                 comments:[]
            };

          PostListService.saveItem(form, User.getToken())
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
