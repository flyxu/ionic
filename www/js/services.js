angular.module('zlyc.services', ['zlyc.utils'])
.factory('User', function($http, $q, $localstorage,SERVER) {

  var o = {
    username: false,
    password: false,
  }
  

  o.login = function(username, password){
      var defer = $q.defer();
      
      AV.User.logIn(username, password, {
      success: function(user) {
        // Do stuff after successful login.
        o.setSession(user.username, user.password);
        defer.resolve(true);
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        //alert("Error: " + error.code + " " + error.message);
        defer.resolve(false);
      }
    });

    return defer.promise;
  }
  // attempt login or signup
  o.signUp = function(username, password, email) {

    // var authRoute;

    // if (signingUp) {
    //   authRoute = 'signup';
    // } else {
    //   authRoute = 'login'
    // }
    // return $http.post(SERVER.url + '/' + authRoute, {username: username})
    //   .success(function(data){
    //     o.setSession(data.username, data.session_id);
    //   });
    var user = new AV.User();
    user.set("username", username);
    user.set("password", password);
    if(email) user.set("email", email);

    var defer = $q.defer();
    user.signUp(null, {
      success: function(user) {
        defer.resolve(true);
      },
      error: function(user,error) {
        // Show the error message somewhere and let the user try again.
        //alert("Error: " + error.code + " " + error.message);
        defer.resolve(false);
      }
    });

    return defer.promise;
	}

  // set session data
  o.setSession = function(username, password) {
    if (username) o.username = username;
    if (password) o.password = password;

    // set data in localstorage object
    $localstorage.setObject('user', { username: username, password: password });
  }

 //  // check if there's a user session present
 //  o.checkSession = function() {
 //    var defer = $q.defer();

 //    if (o.session_id) {
 //      // if this session is already initialized in the service
 //      defer.resolve(true);

 //    } else {
 //      // detect if there's a session in localstorage from previous use.
 //      // if it is, pull into our service
 //      var user = $localstorage.getObject('user');

 //      if (user.username) {
 //        // if there's a user, lets grab their favorites from the server
 //        o.setSession(user.username, user.session_id);
 //        o.populateFavorites().then(function() {
 //          defer.resolve(true);
 //        });

 //      } else {
 //        // no user info in localstorage, reject
 //        defer.resolve(false);
 //      }

 //    }

 //    return defer.promise;
 //  }

 //  // wipe out our session data
 //  o.destroySession = function() {
 //    $localstorage.setObject('user', {});
 //    o.username = false;
 //    o.session_id = false;
 //  }

  return o;
})