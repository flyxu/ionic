angular.module('fcws.controllers')
  .controller('NewCtrl', function($scope,$rootScope,API,User,$filter,InfoListService,$window) {
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
          var id = InfoListService.getListLength()+1+"";
          var user = User.getUserName();
          if(this.post.important)
            important = true;
          var date = new Date();
          var postdate = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss');
          var avatar = User.getUserAvatar();
          InfoListService.addPost(
            {  id: id,
               user: user,
               title : title,
               content: content,
               important: important,
               avatar: avatar,
               date:postdate,
               likes:[],
               comments:[]
            });
          $scope.$emit('newPost');
          $window.location.href = ('#/sidemenu/posts');

          //console.log(title+" "+ content+" "+important+" "+user+" "+postdate+" "+id);
      };
  });
