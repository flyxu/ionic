angular.module('fcws.services')
  .factory('User', function($q,$localstorage,$log) {
    var userKey = 'user';
    var isAuthenticatedKey = 'isAuthenticated';
    var user = $localstorage.get(userKey);
    return {
      loginUser: function (id,name,email) {
          console.log(id+" "+name+" "+email);
          $localstorage.set(userKey,{id:id,name:name,email:email});
          $localstorage.set(isAuthenticatedKey,true);
      },
      logoutUser: function () {
        $localstorage.remove(userKey);
        $localstorage.set(isAuthenticatedKey,false);
      },
      isAuthenticated: function () {
          return $localstorage.get(isAuthenticatedKey);
      },
      getUserId : function () {
          return user.id;
      },
      getUserName: function(){
          return user.name || "欢迎";
      },
      getToken: function () {
        //set email as token temperarily
          return user.email;
      }
    };
  });
