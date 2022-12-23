


  function validationForm() {
    // Get the values of the form fields
    var email = document.forms["login-form"]["email"].value;
    var phone = document.forms["login-form"]["phone"].value;
    var message=document.forms["login-form"]["message"].value;
    // var regex = /^(?:(?:\+|0{0,2})44|[0]?) ?\(?0?(?:0|\{11\})\)?[ -]?\d{3}[ -]?\d{4}$/;

    // Check if the email field is empty

    if (email == "" ) {
      alert("Oop! Email field must be filled out. Plz try again");
      console.log("Try again");
      return false;
    
    }
    else if(phone ==""  || typeof(phone) ==NaN){
        alert("Oops! Check Phone field: It can't be empty and use numerical value ");
        return false;}
        
    else if(message==""){
        alert("Plz the message is important to us. Feel free to text to us");
        return false;
    }
  
 
    alert("Conglatulations! Your message has been submitted");
    alert("Your message has been receive. You will be contacted very soon")
    return true;
  }
  function validatePhone(phone) {
    var regex = /^(?:(?:\+|0{0,2})44|[\s-]*07)[1-9][0-9\s]{8,10}$/;
    if(regex.test(phone)) {alert("your phone is valid");

      return true;
    } else {
        alert("invalid number");
      return false;
    }
  }
  