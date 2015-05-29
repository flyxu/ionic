angular.module('zlyc.controllers', ['ionic','zlyc.services'])

/*
Controller for the Splash page
*/
.controller('LoginCtrl', function($scope, $state ,User) {

    //attempt to signup/login via User.auth
   $scope.submitForm = function(username, password) {
      User.login(username, password).then(function(isSucess){
        // session is now set, so lets redirect to home page
        if(isSucess){
          $state.go('home');
        }else{
          alert('Wrong username or password');
        }
      });
    }

   $scope.goToSign = function(){
      $state.go('signup');
     
   }

})

.controller('SignUpCtrl', function($scope, $state ,User) {

    //attempt to signup/login via User.auth
   $scope.submitForm = function(username, password,email) {
      User.signUp(username,password,email).then(function(isSucess){
        // session is now set, so lets redirect to login page

        if(isSucess){
          alert('SignUp Success!');
          $state.go('login');
        }else{
          alert('Failed , try again !');
        }

      });
    }

   $scope.goToLogin = function(){
      $state.go('login');
     
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