module.exports = function(server, db) {
  var validateRequest = require("../../middlewares/validateRequest");

  //add a reply
  server.post('/api/v1/reply', function(req, res, next) {
    validateRequest.validate(req, res, db, function() {
      var item = req.params;
      db.replyLists.save(item,
        function(err, data) {
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
          });
          res.end(JSON.stringify(data));
        });
    });
    return next();
  });


  //delete a reply
  server.del('/api/v1/reply/:reply_id', function(req, res, next) {
    validateRequest.validate(req, res, db, function() {
      db.replyLists.remove({
        _id: db.ObjectId(req.params.reply_id)
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
