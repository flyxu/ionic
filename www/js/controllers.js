angular.module('zlyc.controllers', ['ionic','zlyc.services'])

/*
Controller for the Splash page
*/
.controller('SplashCtrl', function($scope, $state ,User) {

    //attempt to signup/login via User.auth
   $scope.submitForm = function(username, signingUp) {
      User.auth(username, signingUp).then(function(){
        // session is now set, so lets redirect to discover page
        $state.go('home');

      }, function() {
        // error handling here
        alert('Hmm... try another username.');

      });
    }

})

/*
Controller for the Home page
*/
.controller('HomeCtrl', function($scope) {

})


/*
Controller for our 情报信息
*/
.controller('QbxxCtrl', function($scope) {

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

})