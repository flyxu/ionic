angular.module('fcws.services')
.factory('PreviewService', function($ionicModal, $rootScope,Docs,API) {

  var init = function(tpl, $scope) {

    var promise;
    $scope = $scope || $rootScope.$new();

    $rootScope.show("正在从服务器获取数据");
    // get data
    var url = $scope.selectedDoc.url;
    console.log(url);
    Docs.getDocData(url)
    .success(function(data,status, headers, config) {
      $scope.docHtml = data;
      //  console.log($scope.docHtml);
      $rootScope.hide();
    })
    .error(function(data, status, headers, config) {
      console.log("error: "+ status+" " +data);
      $rootScope.hide();
      $rootScope.notify("额，貌似出错了");
    });

    promise = $ionicModal.fromTemplateUrl(tpl, {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      return modal;
    });

    $scope.openModal = function() {
       $scope.modal.show();
     };
     $scope.closeModal = function() {
       $scope.modal.hide();
     };
     $scope.$on('$destroy', function() {
       $scope.modal.remove();
     });

    return promise;
  };

  return {
    init: init
  };

});
