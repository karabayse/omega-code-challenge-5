//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./modules/routes/index');
var messages = require('./modules/routes/messages');

//uses
app.use('/', index);
app.use('/messages', messages);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

var port = process.env.Port || 6001;

//spin up server
app.listen(port, function(req, res){
  console.log('server is up and listening ->', port);
});
