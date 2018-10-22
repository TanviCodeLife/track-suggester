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

    function chooseLocation(){
      if (locationInput === "Seattle")
      $(".location").text(locationInput);
      else {
        $(".location").text(locationInput);
      }
    }

    function chooseTrack(){
      console.log(validOptions1);
      $("p#name").text(nameInput);
      chooseLocation(locationInput);
      $(".modal").fadeIn();
      //Dev Ops
      if (rolesInput === 1 && expertiseInput >= 2 && goalsInput >= 2) {
        $("#cSharpTrack1").show();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 1 && expertiseInput === 1 && goalsInput >= 2) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").show();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 1 && expertiseInput >= 2 && goalsInput === 1) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").show();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 1 && expertiseInput === 1 && goalsInput === 1) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").show();
        $("#otherOptionsTrack1-2").show();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      //Front-end developer logic
      else if(rolesInput === 2 && expertiseInput >= 1 && goalsInput <= 2) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").hide();
        $("#userExpTrack2").show();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").show();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if(rolesInput === 2 && expertiseInput >= 1 && goalsInput === 3) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").show();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").show();
        $("#otherOptionsTrack1-3").show();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 2 && expertiseInput >= 1 && goalsInput === 4){
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").hide();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").show();
        $("#otherOptionsTrack2-3").show();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
        //Also show track 4 android schedule info
      }
      //Full-Stack Developer
      else if (rolesInput === 3 && expertiseInput >= 2 && goalsInput <= 2) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").hide();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").show();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").show();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 3 && expertiseInput >= 2 && goalsInput === 3) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").show();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 3 && expertiseInput >= 2 && goalsInput === 4) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").show();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").show();
      }
      else if (rolesInput === 3 && expertiseInput === 1 && goalsInput <= 2) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").show();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").show();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 3 && expertiseInput === 1 && goalsInput === 3) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").show();
        $("#otherOptionsTrack3-2").show();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 3 && expertiseInput === 1 && goalsInput === 4) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").show();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").show();
        $("#otherOptionsTrack3-4").show();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      //Android Developer
      else if (rolesInput === 4 && expertiseInput >= 1 && goalsInput === 4) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").hide();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").show();
        $("#javaTrack4").show();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").show();
      }
      else if (rolesInput === 4 && expertiseInput >= 1 && goalsInput === 1) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").hide();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").show();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").hide();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").show();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 4 && expertiseInput >= 1 && goalsInput === 2) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").hide();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").show();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").show();
        $("#otherOptionsTrack4-3").hide();
        $("#otherOptionsTrack4-4").hide();
      }
      else if (rolesInput === 4 && expertiseInput >= 1 && goalsInput === 3) {
        $("#cSharpTrack1").hide();
        $("#otherOptionsTrack1-1").hide();
        $("#otherOptionsTrack1-2").hide();
        $("#otherOptionsTrack1-3").show();
        $("#userExpTrack2").hide();
        $("#otherOptionsTrack2-1").hide();
        $("#otherOptionsTrack2-2").hide();
        $("#otherOptionsTrack2-3").hide();
        $("#rubyReactTrack3").hide();
        $("#otherOptionsTrack3-1").hide();
        $("#otherOptionsTrack3-2").hide();
        $("#otherOptionsTrack3-3").hide();
        $("#otherOptionsTrack3-4").show();
        $("#javaTrack4").hide();
        $("#otherOptionsTrack4-1").hide();
        $("#otherOptionsTrack4-2").hide();
        $("#otherOptionsTrack4-3").show();
        $("#otherOptionsTrack4-4").hide();
      }
    }

    chooseTrack(rolesInput, expertiseInput, goalsInput, flexInput);

    $("#modalClose").click(function(event){
      $(".modal").fadeOut();

    });

    event.preventDefault();
  });
});
