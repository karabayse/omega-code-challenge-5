/*---- Controller ----*/

var myApp = angular.module('myApp', []);

myApp.controller('MessagesController', function($http, MessagesService){
  console.log('in MessagesController');
  var vm = this;

   // function to get messagesModel
   vm.getMessages = function(){
  console.log('in getMessages');
  MessagesService.getAllMessages().then(function(){
    console.log('in controller:', MessagesService.allMessages);
    vm.returnedMessages = MessagesService.allMessages.data;
    console.log(vm.returnedMessages);
  });
}; // end getMessages function

// function to add new message
vm.addMessage = function(){
  console.log('in addMessage');
  var messageToAdd = {
    name: vm.nameIn,
    message: vm.messageIn
  }; // end listingToAdd function
  MessagesService.newMessages(messageToAdd);
  vm.getMessages();
 }; // end newListing function

}); // end controller
