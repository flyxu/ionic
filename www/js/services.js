angular.module('zlyc.services', ['zlyc.utils'])
.factory('User', function($http, $q, $localstorage,SERVER) {

  var o = {
    username: false,
    session_id: false,
  }
  // attempt login or signup
  o.auth = function(username, signingUp) {

    var authRoute;

    if (signingUp) {
      authRoute = 'signup';
    } else {
      authRoute = 'login'
    }
    return $http.post(SERVER.url + '/' + authRoute, {username: username})
      .success(function(data){
        o.setSession(data.username, data.session_id);
      });
	}

 //  // set session data
 //  o.setSession = function(username, session_id) {
 //    if (username) o.username = username;
 //    if (session_id) o.session_id = session_id;

 //    // set data in localstorage object
 //    $localstorage.setObject('user', { username: username, session_id: session_id });
 //  }

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