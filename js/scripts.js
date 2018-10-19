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
  var locationInput = parseInt($("input:radio[name=customRadioInline1]:checked").val());

  //backend

  // function chooseTrack(){
    // if (ageInput > 20 && ageInput) {
    //   $("#match").show();
    //   $("#name").text(nameInput);
    //   $("#unmatch").hide();
    //   if(rolesInput === 1 && expertiseInput === 1 ) {
    //     $("#princessDate1").show();
    //     $("#princessDate2").hide();
    //     $("#princessDate3").hide();
    //     $("#princessDate4").hide();
    //   }
    //   else if(signInput === "Leo" && ageInput <= 35) {
    //     $("#princessDate2").show();
    //     $("#princessDate1").hide();
    //     $("#princessDate3").hide();
    //     $("#princessDate4").hide();
    //   }
    //   else if(signInput === "Pisces" && ageInput <= 35) {
    //     $("#princessDate3").show();
    //     $("#princessDate1").hide();
    //     $("#princessDate2").hide();
    //     $("#princessDate4").hide();
    //   }
    //   else {
    //     $("#princessDate4").show();
    //     $("#princessDate1").hide();
    //     $("#princessDate2").hide();
    //     $("#princessDate3").hide();
    //   }
    // }
    // else if (ageInput < 20 && ageInput) {
    //   $("#unmatch").show();
    //   $("#name1").text(nameInput);
    //   $("#match").hide();
    //   $("#princessDate4").hide();
    //   $("#princessDate1").hide();
    //   $("#princessDate2").hide();
    //   $("#princessDate3").hide();
    // }

  // }

  event.preventDefault();
});
});
