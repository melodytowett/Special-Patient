
    // function validateForm() {
    //         var name = document.getElementById("names").value();
    //         var email = document.getElementById("email").value();
    //         var number = document.getElementById("number").value();
    //         var doctor = document.getElementById("doctors").value();

    //         if (name.value == "") {
    //           alert("enter your name")
    //           name.focus();
    //           return false;
    //         } if (email.value == "") {
    //           alert("enter your email")
    //           email.focus
    //           return false;
    //         } if (number.value == "") {
    //           alert("enter your mobile number") 
    //           number.focus
    //           return false;
    //         } if (doctor.value == "") {
    //           alert("enter the specilist you want to visit")
    //           doctor.focus
    //           return false;
    //         }
    //         return true;
    //       }
  
  function Booking(name, email, phoneNo, doctor, message) {
  this.name = name;
  this.email = email;
  this.phoneNo = phoneNo;
  this.doctor = doctor;
  this.message = message;
}
$(document).ready(function () {

  $("#btn").click(function (event) {
    // event.preventDefault();
   
$("#form").show();

$(".check").show();
$("#btn").hide();
  })
  $("#check").click(function (event) {
    event.preventDefault()
    var myName = $("#names").val();
    var myEmail = $("#email").val();
    var myPhoneNo = $("#number").val();
    var myDoctor = $("#doctors").val();
var myBooking = new Booking( myName, myEmail, myEmail, myPhoneNo, myDoctor)
$(".show").show();
$("#patient").html(myName);
$("#doc").html(myDoctor);
$("#form").hide();
  })
})    


