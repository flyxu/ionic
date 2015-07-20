angular.module('fcws.services')
  .factory('User', function($q) {
    var user = {
        name:"老鹰",
        avatar: "https://avatars3.githubusercontent.com/u/499550"
    };
    return {
      getUserName: function(){
          return user.name;
      },
      getUserAvatar: function () {
          return user.avatar;
      }
    };
  });
