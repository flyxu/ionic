var restify     =   require('restify');
var mongojs     =   require('mongojs');
var morgan  	=   require('morgan');
var db          =   mongojs('fcws', ['appUsers','postList','replyList']);
var server      =   restify.createServer();


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(morgan('dev')); // LOGGER

// CORS
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.listen(process.env.PORT || 9804, function () {
    console.log("Server started @ ",process.env.PORT || 9804);
});

var manageUsers = 	require('./api/v1/user')(server, db);
var manageLists =   require('./api/v1/post')(server, db);
var manageReplies =   require('./api/v1/reply')(server, db);
