module.exports = function(server, db) {
  var validateRequest = require("../auth/validateRequest");
  //get all posts
  server.get("/api/v1/posts", function(req, res, next) {
    validateRequest.validate(req, res, db, function() {
      db.postLists.find({}, function(err, list) {
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(list));
      });
    });
    return next();
  });

  //get a post
  server.get('/api/v1/post/:id', function(req, res, next) {
    validateRequest.validate(req, res, db, function() {
      db.postLists.find({
        _id: db.ObjectId(req.params.id)
      }, function(err, data) {
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(data));
      });
    });
    return next();
  });

  // //add a comment to post
  // server.post('/api/v1/post/:id/comments', function(req, res, next) {
  //   validateRequest.validate(req, res, db, function() {
  //     var postId = req.params.id;
  //     var content = req.params;
  //     db.postLists.find({
  //       _id: db.ObjectId(postId)
  //     }, function(err,post) {
  //       if(err){
  //         return next(err);
  //       }
  //       if(!post){
  //         res.status(404);
  //         return res.send({error_msg:'reply not found'});
  //       }
  //       var comments = data.comments;
  //       res.writeHead(200, {
  //         'Content-Type': 'application/json; charset=utf-8'
  //       });
  //       res.end(JSON.stringify(data));
  //     });
  //   });
  //   return next();
  //
  //   // var ups = function (req, res, next) {
  //   //   var replyId = req.params.reply_id;
  //   //   var userId  = req.user.id;
  //   //
  //   //   Reply.getReplyById(replyId, function (err, reply) {
  //   //     if (err) {
  //   //       return next(err);
  //   //     }
  //   //     if (!reply) {
  //   //       res.status(404);
  //   //       return res.send({error_msg: 'reply `' + replyId + '` not found'});
  //   //     }
  //   //     if (reply.author_id.equals(userId) && !config.debug) {
  //   //       // 不能帮自己点赞
  //   //       res.send({
  //   //         error_msg: '呵呵，不能帮自己点赞。',
  //   //       });
  //   //     } else {
  //   //       var action;
  //   //       reply.ups = reply.ups || [];
  //   //       var upIndex = reply.ups.indexOf(userId);
  //   //       if (upIndex === -1) {
  //   //         reply.ups.push(userId);
  //   //         action = 'up';
  //   //       } else {
  //   //         reply.ups.splice(upIndex, 1);
  //   //         action = 'down';
  //   //       }
  //   //       reply.save(function () {
  //   //         res.send({
  //   //           success: true,
  //   //           action: action
  //   //         });
  //   //       });
  //   //     }
  //   //   });
  //   // };
  //
  // });

  // //up or down a like
  // server.get('/api/v1/fcws/data/item/:id/likes', function(req, res, next) {
  //   validateRequest.validate(req, res, db, function() {
  //     db.postLists.find({
  //       _id: db.ObjectId(req.params.id)
  //     }, function(err, data) {
  //       res.writeHead(200, {
  //         'Content-Type': 'application/json; charset=utf-8'
  //       });
  //       res.end(JSON.stringify(data));
  //     });
  //   });
  //   return next();
  // });

  //add a post
  server.post('/api/v1/post', function(req, res, next) {
    validateRequest.validate(req, res, db, function() {
      var item = req.params;
      db.postLists.save(item,
        function(err, data) {
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
          });
          res.end(JSON.stringify(data));
        });
    });
    return next();
  });

  //update a post
  server.put('/api/v1/post/:id', function(req, res, next) {
    validateRequest.validate(req, res, db, function() {
      db.postLists.findOne({
        _id: db.ObjectId(req.params.id)
      }, function(err, data) {
        // merge req.params/product with the server/product
        var updProd = {}; // updated products
        // logic similar to jQuery.extend(); to merge 2 objects.
        for (var n in data) {
          updProd[n] = data[n];
        }
        for (var num in req.params) {
          if (num != "id")
            updProd[num] = req.params[num];
        }
        db.infoLists.update({
          _id: db.ObjectId(req.params.id)
        }, updProd, {
          multi: false
        }, function(err, data) {
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
          });
          res.end(JSON.stringify(data));
        });
      });
    });
    return next();
  });

  //delete a post
  server.del('/api/v1/post/:id', function(req, res, next) {
    validateRequest.validate(req, res, db, function() {
      db.postLists.remove({
        _id: db.ObjectId(req.params.id)
      }, function(err, data) {
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(data));
      });
      return next();
    });
  });
};
