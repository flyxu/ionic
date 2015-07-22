angular.module('fcws.services')
  .factory('PostListService', function($q,$http ,SERVER,$log) {
    //var postList =  localStorage.postList;
    // if ( postList ) {
    //     try {
    //       postList = JSON.parse(postList, reviveDate);
    //     } catch (e) {
    //       //console.error("JSON parse error:", e);
    //       postList = {};
    //     }
    //   } else {
    //     postList = {};
    //   }
    // var posts = [{
    //   id: "1",
    //   user: "狮子",
    //   title: "高邮有游行！",
    //   content: "高邮地区于早晨开始有游行！人数大概在30人左右，请指示!",
    //   important: true,
    //   avatar: "https://avatars3.githubusercontent.com/u/499550",
    //   date: "2015-07-13",
    //   likes: ["猎豹", "狮子"],
    //   comments: [{
    //     user: "猎豹",
    //     content: "什么鬼?",
    //     date: "2015-7-14 14:30"
    //   }, {
    //     user: "狮子",
    //     content: "鬼子来啦 ",
    //     date: "2015-7-14 14:33",
    //   }, {
    //     user: "土狼",
    //     content: "自己解决呗",
    //     date: "2015-7-14 14:36",
    //   }]
    // }, {
    //   id: "2",
    //   user: "老鹰",
    //   title: "高邮民社一切正常!",
    //   content: "高邮地区民社一切正常!今天的值班任务完成",
    //   important: false,
    //   avatar: "https://avatars1.githubusercontent.com/u/2907617",
    //   date: "2015-07-13",
    //   likes: ["猎豹", "狮子"],
    //   comments: [{
    //     user: "猎豹",
    //     content: "切",
    //     date: "2015-07-14 14:20"
    //   }, {
    //     user: "狮子",
    //     content: "啥异常说清楚啊？",
    //     date: "2015-07-14 14:33",
    //   }, {
    //     user: "土狼",
    //     content: "请配图",
    //     date: "2015-07-14 14:36",
    //   }]
    // }, {
    //   id: "3",
    //   user: "老鹰",
    //   title: "高邮民社出现异常!",
    //   content: "高邮地区民社出现异常!大量不明生物袭来，啊....",
    //   important: true,
    //   avatar: "https://avatars1.githubusercontent.com/u/2907617",
    //   date: "2015-07-13",
    //   likes: ["猎豹", "老鹰"],
    //   comments: [{
    //     user: "猎豹",
    //     content: "没啥大事吧?",
    //     date: "2015-07-14 14:20"
    //   }, {
    //     user: "狮子",
    //     content: "啥异常说清楚啊？",
    //     date: "2015-07-14 14:33",
    //   }, {
    //     user: "土狼",
    //     content: "请配图",
    //     date: "2015-07-14 14:36",
    //   }]
    // }, {
    //   id: "4",
    //   user: "狮子",
    //   title: "泰州一切安好！",
    //   content: "泰州地区民社一切正常!今天的值班任务完成",
    //   important: false,
    //   avatar: "https://avatars3.githubusercontent.com/u/499550",
    //   date: "2015-07-13",
    //   likes: ["猎豹", "狮子"],
    //   comments: [{
    //     user: "猎豹",
    //     content: "没啥大事吧?",
    //     date: "2015-7-14 14:30"
    //   }, {
    //     user: "狮子",
    //     content: "啥异常说清楚啊？",
    //     date: "2015-7-14 14:33",
    //   }, {
    //     user: "土狼",
    //     content: "请配图",
    //     date: "2015-7-14 14:36",
    //   }]
    //
    // }];

    return {
      // postList: function() {
      //   return posts;
      // },
      // getListLength: function() {
      //   return posts.length;
      // },
      getPost: function(post_id) {
        console.log(post_id);
        var dfd = $q.defer();
        posts.forEach(function(post) {
          if (post.id === post_id) {
            dfd.resolve(post);
          }
        });
        return dfd.promise;
      },
      // addPost: function(post) {
      //   posts.splice(0, 0, post);
      //   //  return true;
      // },
      getAll: function(token) {
        return $http.get(SERVER.url + '/api/v1/fcws/data/list', {
          method: 'GET',
          params: {
            token: token
          }
        });
      },
      getOne: function(id,token) {
        return $http.get(SERVER.url+ '/api/v1/fcws/data/item/' + id, {
          method: 'GET',
          params: {
              token: token
          }
        });
      },
      saveItem: function(form,token) {
        return $http.post(SERVER.url + '/api/v1/fcws/data/item', form, {
          method: 'POST',
          params: {
              token: token
          }
        });
      },
      putItem: function(id, form, token) {
        return $http.put(SERVER.url + '/api/v1/fcws/data/item/' + id, form, {
          method: 'PUT',
          params: {
            token: token
          }
        });
      },
      deleteItem: function(id, token) {
        return $http.delete(SERVER.url + '/api/v1/fcws/data/item/' + id, {
          method: 'DELETE',
          params: {
            token: token
          }
        });
      },
    //  updateFromServer: updateFromServer,
    };

    // function updateFromServer(postId) {
    //   if (postId) {
    //     return updatePostFromServer(postId);
    //   } else {
    //     return updatePostListFromServer();
    //   }
    // }

    // function updatePostListFromServer() {
    //   var defer = $q.defer();
    //
    //     getList().then(
    //     function(appListResponse) {
    //       var newAppList = {};
    //       var app;
    //
    //       for (var i = 0; i < appListResponse.length; i++) {
    //         app = new App(appListResponse[i]);
    //         newAppList[app.appId] = app;
    //       }
    //       appList = newAppList;
    //
    //       localStorage.postsList = JSON.stringify(postsList);
    //       $rootScope.$broadcast('appList.update');
    //
    //       defer.resolve(appList);
    //     },
    //     function(error) {
    //       defer.reject(error);
    //     }
    //   );
    //
    //   return defer.promise;
    // }

  });
