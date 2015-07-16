angular.module('fcws.services')
.factory('InfoListService', function() {
  var posts = [{
      id: 1,
      user: "狮子",
      content: "高邮有游行！",
      important: true,
      avatar: "https://avatars3.githubusercontent.com/u/499550",
      date: "2015-07-13",
      likes: ["猎豹","狮子"],
      comments: [{
        user: "猎豹",
        content: "没啥大事吧?",
        date: "2015-7-14 14:30"
      },{
        user: "狮子",
        content: "啥异常说清楚啊？",
        date: "2015-7-14 14:33",
      },{
        user: "土狼",
        content: "请配图",
        date: "2015-7-14 14:36",
      }]
    },{
    id: 2,
    user: "老鹰",
    content: "高邮民社一切正常!",
    important: false,
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
  },{
      id: 3,
      user: "老鹰",
      content: "高邮民社出现异常!",
      important: true,
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
    id: 4,
    user: "狮子",
    content: "泰州一切安好！",
    important: false,
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

  }];
  return {
      get infoList() { return posts; }
  };
});
