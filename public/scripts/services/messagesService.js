/*---- Service ----*/

myApp.service('MessagesService', function($http){
  var sv = this;

  // function to add new message
  sv.addMessage = function(newMessage){
  console.log('in addListing', newMessage);
  $http({
    method: 'POST',
    url: '/messages',
    data: newMessage
  }); // end $http to add new message
}; // end addMessage function












}); // end service
