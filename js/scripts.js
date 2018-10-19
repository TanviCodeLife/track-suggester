//front-end logic
$(document).ready(function() {
  $("form#detailsform").submit(function(event){
  var nameInput = $("input#addName").val();
  var rolesInput = $("addRoles").val();
  var expertiseInput = $("addExpertise").val();
  var goalsInput = $("addGoals").val();
  var flexInput = $("addFlex").val();
  var sessionInput = $("addSess").val();
  var locationInput = $("input:radio[name=customRadioInline1]:checked").val();

  //backend
  var nameInput;
  var signInput;
  var ageInput;

  function chooseTrack(){
    // if (ageInput > 20 && ageInput) {
    //   $("#match").show();
    //   $("#name").text(nameInput);
    //   $("#unmatch").hide();
      if(rolesInput === "Virgo" && ageInput <= 35) {
        $("#princessDate1").show();
        $("#princessDate2").hide();
        $("#princessDate3").hide();
        $("#princessDate4").hide();
      }
      else if(signInput === "Leo" && ageInput <= 35) {
        $("#princessDate2").show();
        $("#princessDate1").hide();
        $("#princessDate3").hide();
        $("#princessDate4").hide();
      }
      else if(signInput === "Pisces" && ageInput <= 35) {
        $("#princessDate3").show();
        $("#princessDate1").hide();
        $("#princessDate2").hide();
        $("#princessDate4").hide();
      }
      else {
        $("#princessDate4").show();
        $("#princessDate1").hide();
        $("#princessDate2").hide();
        $("#princessDate3").hide();
      }
    }
    else if (ageInput < 20 && ageInput) {
      $("#unmatch").show();
      $("#name1").text(nameInput);
      $("#match").hide();
      $("#princessDate4").hide();
      $("#princessDate1").hide();
      $("#princessDate2").hide();
      $("#princessDate3").hide();
    }

  }

  event.preventDefault();
});
});
