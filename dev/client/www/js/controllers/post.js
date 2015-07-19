angular.module('fcws.controllers')
.controller('PostCtrl', function($scope,post,$ionicPopup){
    $scope.post = post;

    $scope.user = {
      username: "老鹰"
    };

    $scope.Like =function () {
       var indexUser = $scope.post.likes.indexOf($scope.user.username);
       if (indexUser > -1) {
          $scope.post.likes.splice(indexUser, 1);
       }else{
          $scope.post.likes.push($scope.user.username);
        }
    };

    $scope.isLike =  function () {
        var indexUser = $scope.post.likes.indexOf($scope.user.username);
        if(indexUser != -1){
          return true;
        }else{
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
    buttons: [
      { text: '取消' },
      {
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
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
    if(res){
      $scope.post.comments.push({
        user: "老鹰",
        content: res,
        date: new Date().toLocaleDateString().toString()
      }
    );
  }
  });
  // $timeout(function() {
  //    myPopup.close(); //close the popup after 3 seconds for some reason
  // }, 3000);
 };
});
