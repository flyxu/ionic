angular.module('fcws.controllers')
/*
Controller for our 情报信息
*/
.controller('InfoCtrl', function($scope) {
  $scope.user = {
    username: "老鹰"
  };
  $scope.ups = [{
    user: "老鹰",
    content: "高邮民社出现异常!",
    avatar:"https://avatars1.githubusercontent.com/u/2907617",
    date: "2015-07-13",
    likes: ["猎豹","老鹰"],
    comments: [{
      user: "猎豹",
      content: "没啥大事吧?",
      date: "2015-07-14"
    }, {
      user: "狮子",
      content: "啥异常说清楚啊？",
      date: "2015-07-14 14:33",
    }, {
      user: "土狼",
      content: "请配图",
      date: "2015-07-14 14:36",
    }]
  }, {
    user: "狮子",
    content: "高邮有游行！",
    avatar: "https://avatars3.githubusercontent.com/u/499550",
    date: "2015-07-13",
    likes: ["猎豹","狮子"],
    comments: [{
      user: "猎豹",
      content: "没啥大事吧?",
      date: "2015-7-14 14:30"
    }, {
      user: "狮子",
      content: "啥异常说清楚啊？",
      date: "2015-7-14 14:33",
    }, {
      user: "土狼",
      content: "请配图",
      date: "2015-7-14 14:36",
    }]

  }, {
    user: "土狼",
    content: "镇上出现暴走族！",
    avatar: "https://avatars3.githubusercontent.com/u/376661",
    date: "2015-7-13",
    likes: ["猎豹","狮子"],
    comments: [{
      user: "猎豹",
      content: "没啥大事吧?",
      date: "2015-7-14 14:30"
    }, {
      user: "狮子",
      content: "啥异常说清楚啊？",
      date: "2015-7-14 14:33",
    }, {
      user: "土狼",
      content: "请配图",
      date: "2015-7-14 14:36",
    }]
  }];

  $scope.posts = [{
    user: "老鹰",
    content: "高邮民社一切正常!",
    avatar:"https://avatars1.githubusercontent.com/u/2907617",
    date: "2015-07-13",
    likes: ["猎豹","狮子"],
    comments: [{
      user: "猎豹",
      content: "没啥大事吧?",
      date: "2015-07-14"
    }, {
      user: "狮子",
      content: "啥异常说清楚啊？",
      date: "2015-07-14 14:33",
    }, {
      user: "土狼",
      content: "请配图",
      date: "2015-07-14 14:36",
    }]
  }, {
    user: "狮子",
    content: "泰州一切安好！",
    avatar: "https://avatars3.githubusercontent.com/u/499550",
    date: "2015-07-13",
    likes: ["猎豹","狮子"],
    comments: [{
      user: "猎豹",
      content: "没啥大事吧?",
      date: "2015-7-14 14:30"
    }, {
      user: "狮子",
      content: "啥异常说清楚啊？",
      date: "2015-7-14 14:33",
    }, {
      user: "土狼",
      content: "请配图",
      date: "2015-7-14 14:36",
    }]

  }, {
    user: "土狼",
    content: "镇上一切安好，请祖国人命放心",
    avatar: "https://avatars3.githubusercontent.com/u/376661",
    date: "2015-7-13",
    likes: ["猎豹","狮子"],
    comments: [{
      user: "猎豹",
      content: "没啥大事吧?",
      date: "2015-7-14 14:30"
    }, {
      user: "狮子",
      content: "啥异常说清楚啊？",
      date: "2015-7-14 14:33",
    }, {
      user: "土狼",
      content: "请配图",
      date: "2015-7-14 14:36",
    }]
  }];


  $scope.upLike =function (index) {
     var indexUser = $scope.ups[index].likes.indexOf($scope.user.username);
     if (indexUser > -1) {
        $scope.ups[index].likes.splice(indexUser, 1);
     }else{
        $scope.ups[index].likes.push($scope.user.username);
      }
  };

  $scope.isUpLike =  function (index) {
      var indexUser = $scope.ups[index].likes.indexOf($scope.user.username);
      if(indexUser != -1){
        return true;
      }else{
        return false;
      }
  };

  $scope.postsLike =function (index) {
     var indexUser = $scope.posts[index].likes.indexOf($scope.user.username);
     if (indexUser > -1) {
        $scope.posts[index].likes.splice(indexUser, 1);
     }else{
        $scope.posts[index].likes.push($scope.user.username);
      }
  };

  $scope.isPostsLike =  function (index) {
      var indexUser = $scope.posts[index].likes.indexOf($scope.user.username);
      if(indexUser != -1){
        return true;
      }else{
        return false;
      }
  };

});
