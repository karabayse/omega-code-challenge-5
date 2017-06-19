/*---- Controller ----*/

var myApp = angular.module('myApp', []);

myApp.controller('MessagesController', function($http, MessagesService){
  console.log('in MessagesController');
  var vm = this;

  // function to add new message
  vm.addMessage = function(){
    console.log('in addMessage');
    var messageToAdd = {
      name: vm.nameIn,
      message: vm.messageIn
    }; // end listingToAdd function
    MessagesService.addMessage(messageToAdd);
    vm.getMessages();
   }; // end newListing function












}); // end controller
