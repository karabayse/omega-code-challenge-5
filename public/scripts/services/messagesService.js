/*---- Service ----*/

myApp.service('MessagesService', function($http){
  var sv = this;

// function to get new message
sv.getAllMessages = function(){
  console.log('in getAllMessages');
  return $http({
    method: 'GET',
    url: '/messages',
  }).then(function(response){
    console.log('back from server with response:', response);
    sv.allMessages = response;
  }); // end $http
}; // end getAllMessages function

// function to add new message
sv.newMessages = function(newMessage){
console.log('in addListing', newMessage);
$http({
  method: 'POST',
  url: '/messages',
  data: newMessage
}); // end $http to add new message
}; // end addMessage function

}); // end service
