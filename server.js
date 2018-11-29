// var http = require('http');
// http.createServer(function (request, response) {
   // response.writeHead(200, {'Content-Type': 'text/plain'});
   // response.end('Hello World\n');
// }).listen(8888);

// console.log('Server running at http://127.0.0.1:8888/');


// var express = require('express');
// var app = express();
// var port = 8888;

var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = 3000;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
	res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
	res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
	res.sendFile(path + "contact.html");
});
router.get("/RegisterDoctor",function(req,res){
	res.sendFile(path + "RegisterDoctor.html");
});
router.get("/login",function(req,res){
	res.sendFile(path + "login.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});


app.listen(port, '0.0.0.0', function() {
 console.log('Server running at port ' + port);
});
