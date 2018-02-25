var errorMessage = "";//global var used to keep track of the string to be displayed to the user

function showValidationErrors(){
  document.getElementById('response-msg').innerHTML = errorMessage;
  if(document.getElementById('response-container').classList.contains('hidden')){
    document.getElementById('response-container').classList.remove('hidden');
  }
  //in the case than an error is already being shown, highlight the error box temporarily with a shadow class
  else{
    document.getElementById('response-box').classList.add('shadow-5');
    setTimeout(function(){
      document.getElementById('response-box').classList.remove('shadow-5');
    }, 2000);//in 2 seconds, removes the shadow class
  }
}
//inverse function of showValidationErrors
function hideValidationErrors(){
  document.getElementById('response-msg').innerHTML = '';
  if(!document.getElementById('response-container').classList.contains('hidden')){
    document.getElementById('response-container').classList.add('hidden');
  }
}

function validateRegistration(form){
  errorMessage = "Error!<br>";//reset error message for the form submission
  var isFormValid = true;
  //check for empty required inputs and store the specific error message in the global var
  if(form.name.value == '' || form.email.value == '' || form.password.value == '' || form.password_confirmation.value == ''){
    isFormValid = false;
    errorMessage += "&#10006; One or More required fields have not been filled out.";
  }
  //check if the name contains anything except letters and spaces
  else if(!(/^[A-Za-z ]+$/).test(form.name.value)){
    isFormValid = false;
    errorMessage += "&#10006; A Name can only contain letters";
  }
  //check if the email format is valid (format tested: words"@"words"."words)
  else if(!(/^[A-Za-z]+\@[A-Za-z]+\.[A-Za-z]+$/).test(form.email.value)){
    isFormValid = false;
    errorMessage += "&#10006; An Email Address must be of the form 'address@example.ca'";
  }
  else if(form.password.value != form.password_confirmation.value){
    isFormValid = false;
    errorMessage += "&#10006; Password confirmation does not match Password";
  }
  //depending on the value of isFormValid, show or hide the list of errors, and return the value back to the form
  if(!isFormValid) showValidationErrors();
  else hideValidationErrors();
  return isFormValid;
}
