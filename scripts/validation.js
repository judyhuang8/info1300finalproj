$(document).ready(function () {

  //Contact Us Page Form Validation
  $("#name").on("input", function() {
    $("#name").attr("required", true);
  })

  $("#email").on("input", function() {
    $("#email").attr("required", true);
  })

  $("#listserv").on("submit", function() {
    var formValid = true;

    if ($("#name").prop("validity").valid) {
      $("#nameError").addClass("hidden");
    } else {
      $("#nameError").removeClass("hidden");
      formValid = false;
    }

    if ($("#email").prop("validity").valid) {
      $("#emailInvalError").addClass("hidden");
      $("#noEmailError").addClass("hidden");
    } else if ($("#email").prop("validity").valueMissing) {
      $("#emailInvalError").addClass("hidden");
      $("#noEmailError").removeClass("hidden");
      formValid = false;
    } else {
      $("#emailInvalError").removeClass("hidden");
      $("#noEmailError").addClass("hidden");
      formValid = false;
    }

    return formValid;
  });

  //Showcase ticket form validation
  $("#venmo").on("input", function(){
      $(".venmoRequest").removeClass("hidden");
      $("#venmoName").attr("required", true);

  })

  $("#cash").on("input", function(){
      $(".venmoRequest").addClass("hidden");
      $("#venmoName").attr("required", false);
  })


  $("#showcaseTicket").on("submit", function() {
    var formValid = true;

    if ($("#name").prop("validity").valid) {
      $("#nameError").addClass("hidden");
    } else {
      $("#nameError").removeClass("hidden");
      formValid = false;
    }

    if ($("#ticketNum").prop("validity").valid) {
      $("#ticketError").addClass("hidden");
    } else {
      $("#ticketError").removeClass("hidden");
      formValid = false;
    }

    if ( $("#venmo").is(':checked') || $("#cash").is(':checked')) {
        $("#paymentError").addClass("hidden");
    } else {
        $("#paymentError").removeClass("hidden");
        formValid = false;
    }

    if ( ($("#venmo").is(':checked') && $("#venmoName").prop("validity").valid) || $("#cash").is(':checked')  ) {
      $("#venmoNameError").addClass("hidden");
    } else {
      $("#venmoNameError").removeClass("hidden");
      formValid = false;
    };

    return formValid;
  });


});
