




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
  console.log(flexInput);
  var sessionInput = parseInt($("select#addSess").val());
  var locationInput = $("input:radio[name=customRadioInline1]:checked").val();
  console.log(locationInput);

  //backend

  function chooseLocation(){
    if (locationInput === "Seattle")
     $(".location").text(locationInput);
    else {
     $(".location").text(locationInput);
    }
  }

  function chooseTrack(){
    console.log(validOptions1);
    $(".name").text(nameInput);
    chooseLocation(locationInput);
    $(".modal").fadeIn();
    //Dev Ops
    if (rolesInput === 1 && expertiseInput >= 2 && goalsInput >= 2 && flexInput === 2) {
      $("#cSharpTrack1").show();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").hide();
      $("#otherOptionsTrack1").hide();
      $("#otherOptionsTrack2").hide();
      $("#otherOptionsTrack3").hide();
      $("#otherOptionsTrack4").hide();
      var validOptions1 = false;
    }
    else if (rolesInput === 1 && !validOptions1) {
      $("#otherOptionsTrack1").show();
      $("#otherOptionsTrack2").hide();
      $("#otherOptionsTrack3").hide();
      $("#otherOptionsTrack4").hide();
      $("#cSharpTrack1").hide();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").hide();
    }
    //Front-end developer logic
    else if(rolesInput === 2 && expertiseInput >= 1 && goalsInput >= 1  && flexInput >= 1) {
      $("#cSharpTrack1").hide();
      $("#userExpTrack2").show();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").hide();
      $("#otherOptionsTrack1").hide();
      $("#otherOptionsTrack2").hide();
      $("#otherOptionsTrack3").hide();
      $("#otherOptionsTrack4").hide();
      var validOptions2 = false;
    }
    else if (rolesInput === 2 && !validOptions2){
      $("#otherOptionsTrack1").hide();
      $("#otherOptionsTrack2").show();
      $("#otherOptionsTrack3").hide();
      $("#otherOptionsTrack4").hide();
      $("#cSharpTrack1").hide();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").hide();
    }
    //Full-Stack Developer
    else if (rolesInput === 3 && expertiseInput >= 2 && goalsInput <=2 && flexInput === 2) {
      $("#cSharpTrack1").hide();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").show();
      $("#javaTrack4").hide();
      $("#otherOptionsTrack1").hide();
      $("#otherOptionsTrack2").hide();
      $("#otherOptionsTrack3").hide();
      $("#otherOptionsTrack4").hide();
      var validOptions3 = false;
    }
    else if (rolesInput === 3 && !validOptions3) {
      $("#otherOptionsTrack1").hide();
      $("#otherOptionsTrack2").hide();
      $("#otherOptionsTrack3").show();
      $("#otherOptionsTrack4").hide();
      $("#cSharpTrack1").hide();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").hide();
    }
    //Android Developer
    else if (rolesInput === 4 && expertiseInput >= 1 && goalsInput === 2 && flexInput === 2) {
      $("#cSharpTrack1").hide();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").show();
      $("#otherOptionsTrack1").hide();
      $("#otherOptionsTrack2").hide();
      $("#otherOptionsTrack3").hide();
      $("#otherOptionsTrack4").hide();
      var validOptions4 = false;
    }
    else if (rolesInput === 4 && !validOptions4) {
      $("#otherOptionsTrack1").hide();
      $("#otherOptionsTrack2").hide();
      $("#otherOptionsTrack3").hide();
      $("#otherOptionsTrack4").show();
      $("#cSharpTrack1").hide();
      $("#userExpTrack2").hide();
      $("#rubyReactTrack3").hide();
      $("#javaTrack4").hide();
    }
  }

  chooseTrack(rolesInput, expertiseInput, goalsInput, flexInput);
  $("#modalClose").click(function(event){
   $(".modal").fadeOut();

 });

  event.preventDefault();
});
});
