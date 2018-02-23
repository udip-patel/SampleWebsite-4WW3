//AN ONCLICK based event handling function when the user clicks on the checkbox
function toggleTrackingLocation(){
  if(document.getElementById('track-location').checked){
    getLocation();
  }
  else{
    resetLocationTracking();
  }
}

//uses HTML navigator to find the location
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showLocation, showError);
  }
  else{
    showErrorResponse("Browser does not support Geolocation");
  }
}

//success function, called when poistion is found. sets the values of lat and lon to be displayed
//also saves the current location into hidden input values that can be used for part 3 of the project when actually submitting the search form
function showLocation(position){
  document.getElementById('current-lat').innerHTML = position.coords.latitude;
  document.getElementById('current-lon').innerHTML = position.coords.longitude;
  document.getElementById('search-lat').value = position.coords.latitude;
  document.getElementById('search-lon').value = position.coords.longitude;
  //hide any errors if there were any being shown
  if(!document.getElementById('error-response-box').classList.contains('hidden')){
    document.getElementById('error-response-box').classList.add('hidden');
  }
  document.getElementById('success-response-box').classList.remove('hidden');
}

//simple function that is called when position is not found. error contains all th information about the issue, but a single response is used for all cases
function showError(error){
  showErrorResponse('There was a problem with tracking your location');
}

function showErrorResponse(message){
  //reset hidden input values to default -
  document.getElementById('search-lat').value = '-'
  document.getElementById('search-lon').value = '-';
  //load error text and show the error message
  document.getElementById('error-message').innerHTML = message;
  if(document.getElementById('error-response-box').classList.contains('hidden')){
    document.getElementById('error-response-box').classList.remove('hidden');
  };
}

//for when the user de-selects the "track location" checkbox
function resetLocationTracking(){
  //RESET the values of hidden input values that will pass the user's lon and lat value to the server
  document.getElementById('search-lat').value = '-'
  document.getElementById('search-lon').value = '-';

  //hide any response dialogs that are currently BEING SHOWN
  if(!document.getElementById('success-response-box').classList.contains('hidden')){
    document.getElementById('success-response-box').classList.add('hidden');
  }
  if(!document.getElementById('error-response-box').classList.contains('hidden')){
    document.getElementById('error-response-box').classList.add('hidden');
  }
}
