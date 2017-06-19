// requires
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// 27017 is default Mongo port --> messagesdb is the name of the DB
mongoose.connect('localhost:27017/messagesdb');

// build Schema
var messagesSchema = new mongoose.Schema ({
  name: String,
  message: String
});

// create model ---------------vvvvvvvv messagestable is name of DB table
var messagesModel = mongoose.model('messagestable', messagesSchema);

// uses
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

// get new message
router.get('/', function(req, res) {
  // get and send back all the things
  messagesModel.find().then(function(data) {
    res.send(data);
  });
}); // end /messages get call

// post new message
router.post('/', function(req, res) {
  console.log('req.body.name: ' + req.body.name);
  // retrieved the req.body
  // putting it into an object to be saved in the db
  var messageToAdd = {
    cost: req.body.name,
    rent: req.body.message
  };

  // create new listing
  var newMessage = messagesModel(messageToAdd);
  newMessage.save();
});

// delete listing
// router.delete('/:id', function(req, res){
//   console.log('req.body: ', req.body);
//   listings.remove({_id:req.params.id}).then(function(){
//     res.sendStatus(200);
//   });
// }); // end listing to delete

module.exports = router;
