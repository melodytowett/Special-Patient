
  $(document).ready(function(){
    $("#family").click(function(){
      $(".intro").slideToggle("slow");
    });
  });

  function Submit(){
    var getEmail =document.getElementById("email").value;
    var getName =document.getElementById("fname").value;
    var getNumber =document.getElementById("phone").value;
    var getMessage =document.getElementById("Message").value;
   
console.log(getName);
    /*declaration*/

    
    if (getEmail == ""){
        alert("please provide email");
        return false;

    }
    if (getName == ""){
        alert("please provide name");
        return false;
    }
    if (getNumber == ""){
        alert("please provide your phone number");
        
        return false;
    }
    else if(getNumber.length < 10){
        alert("Number should be 10 digits")
    }
 

    if (getMessage == ""){
        alert("please provide a message");
        return false;
    }
    alert("THank You " + getName + " for reaching out to us,we will get back to you as soon as possible")
}
function order(){
    var getDrugs = document.getElementById("packaging").value;
    var getpackaging = document.getElementById("drugs").value;
    var getQuantity = document.getElementById("quantity").value;

    var calculate = (parseInt(getDrugs) + parseInt(getpackaging)) * quantity;

    if (getDrugs == ""){
        alert("please indicate the drug you need");
        return false;
    }

    if ( getpackaging  == ""){
        alert("please indicate how you want it packaged");
        return false;
    }
    if (getQuantity == "" || getQuantity <=0 ){
        alert("please provide a positive number");
        return false;
    }
    alert("Your drugs will cost you " + calculate + "Thank you for buying from us." )
}
