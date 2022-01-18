$(document).ready(function() {
    $("#btn").click(function() {
      $(".myForm").toggle();
    });
    $("#btn1").click(function() {
        $(".myForm1").toggle();
      });
      $("#btn2").click(function() {
        $(".myForm2").toggle();
      });
      $("#btn3").click(function() {
        $(".myForm3").toggle();
      });
      $("#btn4").click(function() {
        $(".myForm4").toggle();
      });
      $("#btn5").click(function() {
        $(".myForm5").toggle();
        // $("#show").show();
      });
  }); 
  $(document).ready(function () {
    $(".button").click(function (event) {
        event.preventDefault();
        var myName = $("#names").val();
        var myNumber = $("#number").val();
        var myEmail = $("#email").val();
        var myMess = $("#mess").val();
            $("#show").show();
            $("#patient").html(myName);
}) 
  })

