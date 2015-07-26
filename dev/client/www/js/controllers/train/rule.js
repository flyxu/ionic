angular.module('fcws.controllers')
.controller('TrainRuleCtrl', function($scope) {
  $scope.docs = [
    {
      name: "最高人民法院关于审理破坏公用电信设施刑事案件具体应用法律若干问题的解释",
      url: "train\/rules\/top-public-method.html"
    },
    {
      name: "中华人名共和国军事设施保护法实施办法",
      url: "train\/rules\/china-protect-method.html"
    },
    {
      name: "中华人民共和国电信条例相关条款",
      url: "train\/rules\/china-mobile-related.html"
    },
    {
      name: "中国人民解放军电磁频道管理条例",
      url: "train\/rules\/china-chanel-related.html"
    },
    {
      name: "邮电部关于损坏通信线路",
      url: "train\/rules\/about-mobile-broken.html"
    },
    {
      name: "我国学生军事训练有关法律法规及重要文件节录",
      url: "train\/rules\/center-protect-rule.html"
    },
    {
      name: "国务院、中央军委关于保护通信线路的规定",
      url: "train\/rules\/top-public-method.html"
    }
  ];
});
