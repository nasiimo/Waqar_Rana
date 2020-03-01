// API call
$.getJSON("http://api.open-notify.org/iss-now.json", function(data){
  console.log(data);


  var longitude = data.iss_position.longitude;

  var latitude = data.iss_position.latitude;
  $(".latitude").append(latitude);
  $(".longitude").append(longitude);

});
// API call end

// Form Validation Regular Expression
function validateName(){

  var firstname = document.getElementById("fname").value;
  var lastname  = document.getElementById("lname").value;

  var nameRGEX = /^[A-Za-z]*\s{1}[A-Za-z]*$/;

  var firstnameResult = nameRGEX.test(firstname);
  var lastnameResult = nameRGEX.test(lastname);

  if(firstnameResult || lastnameResult == false){
    alert("Please enter a valid name");
    return false;
  }
  return true;
}

function validateNumber(){

  var number = document.getElementById("number").value;
  var numberRGEX = /^[0-9]*$/;
  var numberResult = numberRGEX.test(number);

  if(numberResult == false){
    alert("Please enter a valid number");
    return false;
  }
  return true;
}

function validateEmail(){

  var email = document.getElementById("email");
  var emailRGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  var emailResult = emailRGEX.test(email);
  if(emailResult == false){
    alert("Please enter valid email");
    return false;
  }
  return true;

}
// Form validation end
