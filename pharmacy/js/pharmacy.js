

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
    var getDrugs = document.getElementById("drugs").value;
    var getPackaging = document.getElementById("packaging").value;
    var getQuantity = document.getElementById ("quantity").value;
    var getCost = (parseInt(getDrugs) + parseInt(getPackaging)) *getQuantity;
 var Delivery = document.getElementById("delivery").value;


    function getDrugs() {
        if (getDrugs == "") {
            alert("please place the type of drug you need ");
            return false;
        }
    }

    function getPackaging() {
        if ( getPackaging== "") {
            alert("choose your choice oF packaging");
            return false;
        }
    }

    function getQuantity() {
        if (getQuantity == "" || getQuantity <= 0) {
            alert("choose quantity");
            return false;

        }
    }
    alert("You have ordered " + getQuantity + "doses of " + getDrugs + " packaged in " + getPackaging + " at a cost of " + getCost + " " + " thanks for shopping with us");
}




/*
function getDelivery(){
    if (getDelivery == "don't deliver") {
        alert("Thank you for shopping with us");
        
    }
    else  var location = prompt("Please Enter your Location");
alert("Your drugs will be delivered in " + location + " with an extra cost of ksh 200.");
}
*/
















