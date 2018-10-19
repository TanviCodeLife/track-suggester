//front-end logic
$(document).ready(function() {
  $("form#detailsform").submit(function(event){
  var nameInput = $("input#addName").val();
  var rolesInput = parseInt($("select#addRoles").val());
  console.log(rolesInput);
  var expertiseInput = parseInt($("select#addExpertise").val());
  console.log(expertiseInput);
  var goalsInput = parseInt($("select#addGoals").val());
  console.log(goalsInput);
  var flexInput = parseInt($("select#addFlex").val());
  var sessionInput = parseInt($("select#addSess").val());
  var locationInput = $("input:radio[name=customRadioInline1]:checked").val();
  console.log(locationInput);

  //backend

  funtion chooseLocation(){
    if (locationInput === "Seattle")
     $(".location").text(locationInput);
    else {
     $(".location").text(locationInput);
    }
  }

  function chooseTrack(){
    if (rolesInput){
      $("noRoleOptionsTrack").hide();
      $(".name").text(nameInput);
      chooseLocation(locationInput);
      if (rolesInput === 1) {
        if (expertiseInput >= 2 && goalsInput === 3 && flexInput === 2) {
         $("#cSharpTrack1").show();
         $("#userExpTrack2").hide();
         $("#rubyReactTrack3").hide();
         $("#javaTrack4").hide();
         $("otherOptionsTrack1").hide();
         $("otherOptionsTrack2").hide();
         $("otherOptionsTrack3").hide();
         $("otherOptionsTrack4").hide();
       }
       else {
         $("otherOptionsTrack1").show();
         $("otherOptionsTrack2").hide();
         $("otherOptionsTrack3").hide();
         $("otherOptionsTrack4").hide();
         $("#userExpTrack2").hide();
         $("#rubyReactTrack3").hide();
         $("#javaTrack4").hide();
       }
      }
      if (rolesInput === 2){
        if (expertiseInput >= 1 && goalsInput >= 2  && goalsInput < 4 && flexInput <= 2) {
         $("#cSharpTrack1").hide();
         $("#userExpTrack2").show();
         $("#rubyReactTrack3").hide();
         $("#javaTrack4").hide();
         $("otherOptionsTrack1").hide();
         $("otherOptionsTrack2").hide();
         $("otherOptionsTrack3").hide();
         $("otherOptionsTrack4").hide();
       }
        else {
         $("otherOptionsTrack1").hide();
         $("otherOptionsTrack2").show();
         $("otherOptionsTrack3").hide();
         $("otherOptionsTrack4").hide();
         $("#userExpTrack2").hide();
         $("#rubyReactTrack3").hide();
         $("#javaTrack4").hide();
        }
      }
      else if (rolesInput === 3) {
        if (expertiseInput >= 3 && goalsInput >= 3 && flexInput === 2) {
          $("#cSharpTrack1").hide();
          $("#userExpTrack2").hide();
          $("#rubyReactTrack3").show();
          $("#javaTrack4").hide();
          $("otherOptionsTrack1").hide();
          $("otherOptionsTrack2").hide();
          $("otherOptionsTrack3").hide();
          $("otherOptionsTrack4").hide();
        }
       else {
         $("otherOptionsTrack1").hide();
         $("otherOptionsTrack2").hide();
         $("otherOptionsTrack3").show();
         $("otherOptionsTrack4").hide();
         $("#userExpTrack2").hide();
         $("#rubyReactTrack3").hide();
         $("#javaTrack4").hide();
       }
      }
      else if (rolesInput === 4){
        if (expertiseInput >= 1 && goalsInput === 2 && flexInput === 2) {
          $("#cSharpTrack1").hide();
          $("#userExpTrack2").hide();
          $("#rubyReactTrack3").hide();
          $("#javaTrack4").show();
          $("otherOptionsTrack1").hide();
          $("otherOptionsTrack2").hide();
          $("otherOptionsTrack3").hide();
          $("otherOptionsTrack4").hide();
        }
        else {
          $("otherOptionsTrack1").hide();
          $("otherOptionsTrack2").hide();
          $("otherOptionsTrack3").hide();
          $("otherOptionsTrack4").show();
          $("#userExpTrack2").hide();
          $("#rubyReactTrack3").hide();
          $("#javaTrack4").hide();
        }
      }
    }
    else {
      $(".name").text(nameInput);
      $("noRoleOptionsTrack").show();
      $("otherOptionsTrack1").hide();
      $("otherOptionsTrack2").hide();
      $("otherOptionsTrack3").hide();
      $("otherOptionsTrack4").hide();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").hide();
    }
  }

  chooseTrack(rolesInput, expertiseInput, goalsInput, flexInput);

  event.preventDefault();
});
});
