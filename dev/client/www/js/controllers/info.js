angular.module('fcws.controllers')
/*
Controller for our 情报信息
*/
.controller('InfoCtrl', function($scope,InfoListService) {
  $scope.user = {
    username: "老鹰"
  };

  $scope.posts = InfoListService.infoList;

  $scope.Like =function (index) {
     var indexUser = $scope.posts[index].likes.indexOf($scope.user.username);
     if (indexUser > -1) {
        $scope.posts[index].likes.splice(indexUser, 1);
     }else{
        $scope.posts[index].likes.push($scope.user.username);
      }
  };

  $scope.isLike =  function (index) {
      var indexUser = $scope.posts[index].likes.indexOf($scope.user.username);
      if(indexUser != -1){
        return true;
      }else{
        return false;
      }
  };

});
