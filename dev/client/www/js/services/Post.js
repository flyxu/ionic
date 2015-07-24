angular.module('fcws.services')
  .factory('Post', function($q,$localstorage,$log,$rootScope,User,$http,SERVER) {
    return {
      getPost: function(id) {
        var token = User.getToken();
        return $http.get(SERVER.api+ '/post/' + id, {
          method: 'GET',
          params: {
              token: token
          }
        });
      },

      deletePost: function(id) {
        var token = User.getToken();
        return $http.delete(SERVER.api + '/post/' + id, {
          method: 'DELETE',
          params: {
            token: token
          }
        });
      },

      //TODO add a comment
      saveComment: function(id,commentData) {
        var token = User.getToken();
        return $http.post(SERVER.api + '/post/'+id+'/comments', commentData, {
          method: 'POST',
          params: {
              token: token
          }
        });
      },

      //TODO like a post
      likePost: function (id) {
        var token = User.getToken();
        return $http.post(SERVER.api + '/post/'+id+'/likes',null,{
          method: 'POST',
          params: {
              token: token
          }
        });
      }
    //  updateFromServer: updateFromServer,
    };
  });
