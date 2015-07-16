angular.module('fcws.controllers', ['ionic', 'fcws.services'])

/*
Controller for the Splash page
*/
.controller('SignInCtrl', function($rootScope, $scope, API, $window) {
      // if the user is already logged in, take him to his bucketlist
    if ($rootScope.isSessionActive()) {
      $window.location.href = ('#/sidemenu/qbxx');
    }

  // $scope.user = {
  //   email: "",
  //   password: ""
  // };

  $scope.validateUser = function() {
  //   var email = this.user.email;
  //   var password = this.user.password;
  //   if (!email || !password) {
  //     $rootScope.notify("Please enter valid credentials");
  //     return false;
  //   }
  //   $rootScope.show('Please wait.. Authenticating');
  //   API.signin({
  //     email: email,
  //     password: password
  //   }).success(function(data) {
  //     $rootScope.setToken(email); // create a session kind of thing on the client side
  //     $rootScope.hide();
  //     $window.location.href = ('#/sidemenu/qbxx');
  //   }).error(function(error) {
  //     $rootScope.hide();
  //     $rootScope.notify("Invalid Username or password");
  //   });
       $window.location.href = ('#/sidemenu/info');
   };
})

.controller('SignUpCtrl', function($rootScope, $scope, API, $window) {
  // $scope.user = {
  //   email: "",
  //   password: "",
  //   name: ""
  // };

  $scope.createUser = function() {
    // var email = this.user.email;
    // var password = this.user.password;
    // var uName = this.user.name;
    // if (!email || !password || !uName) {
    //   $rootScope.notify("Please enter valid data");
    //   return false;
    // }
    // $rootScope.show('Please wait.. Registering');
    // API.signup({
    //   email: email,
    //   password: password,
    //   name: uName
    // }).success(function(data) {
    //   $rootScope.setToken(email); // create a session kind of thing on the client side
    //   $rootScope.hide();
    //   $window.location.href = ('#/sidemenu/qbxx');
    // }).error(function(error) {
    //   $rootScope.hide();
    //   if (error.error && error.error.code == 11000) {
    //     $rootScope.notify("A user with this email already exists");
    //   } else {
    //     $rootScope.notify("Oops something went wrong, Please try again!");
    //   }
    // });
      $window.location.href = ('#/sidemenu/info');
  };
})

/*
Controller for the Home page
*/
.controller('HomeCtrl', function($scope) {
  // $scope.functions = [
  //     { title: '情报信息' },
  //     { title: '指挥控制' },
  //     { title: '军事训练' },
  //     { title: '教育管理' },
  //     { title: '国防动员' },
  //     { title: '通讯录' }
  //   ];

  // $scope.activeFunction = $scope.functions[Functions.getLastActiveIndex()];

  //  // Called to select the given project
  // $scope.selectFunction = function(project, index) {
  //   $scope.activeFunction = project;
  //   Functions.setLastActiveIndex(index);

  //   switch(index){
  //     case 0: $state.go('home.qbxx');break;
  //     case 1: $state.go('home.zhkz');break;
  //     case 2: $state.go('home.jsxl');break;
  //   }

  //   $ionicSideMenuDelegate.toggleLeft(false);
  // };

})

/*
Controller for our 控制台
*/
.controller('DashboardCtrl', function($scope) {

})

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

})


/*
Controller for our 指挥控制
*/
.controller('ZhkzCtrl', function($scope) {

})

/*
Controller for our 军事训练
*/
.controller('JsxlCtrl', function($scope) {

})

/*
Controller for our 教育管理
*/
.controller('JyglCtrl', function($scope) {

})

/*
Controller for our 国防动员
*/
.controller('GfdyCtrl', function($scope) {

})

/*
Controller for our 通讯录
*/


.controller('TxlCtrl', function($scope) {

});
