$(document).ready(function () {



  // Autofocus the Name field, however, this will occur if javascript is disabled, autofocus added to html element.
  $('#name').focus();

  // Display an input field if the job role 'other' is select_method
  $('#basic-info').append('<input type="text" id="other-field" placeholder="Your Job Title..." name="other_job">');

  // Hide the alt OTHER field if JS is NOT disabled.
  $('#other-role-heading').hide();
  $('#other-field-nojs').hide();


  // Hide the text field until role is chosen
  $('#other-field').hide();
  // Display other field when title selected is "other"
  $('#title').change(function() {
    if($('#title option:selected').val() === "other") {
      $('#other-field').show();
    } else {
      $('#other-field').hide();
    }
  });

  /////////////////////////////////////
  /////// *** T-Shirt Selection ** /////////

  // Hide color choices until a design is chosen
  $('#colors-js-puns').hide();

  //Change function to show t-shirt colors per design
  var shirtSelected = false;
  $('#design').change(function() {
    if ($('#design option:selected').val() === "js puns") {
      $('#colors-js-puns').show();
      $('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
      shirtSelected = true;
      return shirtSelected;

    } else if ($('#design option:selected').val() === "heart js") {
      $('#colors-js-puns').show();
      $('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
      shirtSelected = true;
      return shirtSelected;
    } else {
      $('#color-js-puns').hide();
      shirtSelected = false;
      return shirtSelected;
    }
  });


  /////////////////////////////////////////////////
  ////////// *** Activities Section *** //////////////////////

  // Append html to hold total
  $('.activities').append('<div id="total"></div>');

  // Variable to hold the total cost
  var totalCost = 0;
  // Function to update the total totalCost
  var updateCost = function (cost) {
    totalCost += cost;
    document.getElementById("total").innerHTML = "Acitives Total: $" + totalCost;
  };

  const mainConference = document.getElementById("all");
  mainConference.type = 'checkbox';

  mainConference.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      mainConference.disabled = false;
      updateCost(200);
    } else {
      updateCost(-200);
    }
  });

  const jsFrameworks = document.getElementById("js-frameworks");
  jsFrameworks.type = 'checkbox';

  jsFrameworks.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      expressWs.disabled = true;
      document.getElementById("4").style.color = "gray";
      updateCost(100);
    } else {
      updateCost(-100);
      expressWs.disabled = false;
      document.getElementById("4").style.color = "black";
    }
  });

  const jsLibs = document.getElementById("js-libs");
  jsLibs.type = 'checkbox';

  jsLibs.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      nodeWs.disabled = true;
      document.getElementById("5").style.color = "gray";
      updateCost(100);
    } else {
      nodeWs.disabled = false;
      document.getElementById("5").style.color = "black";
      updateCost(-100);
    }
  });

  const expressWs = document.getElementById("express");
  expressWs.type = 'checkbox';

  expressWs.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      jsFrameworks.disabled = true;
      document.getElementById("2").style.color = "gray";
      updateCost(100);
    } else {
      jsFrameworks.disabled = false;
      document.getElementById("2").style.color = "black";
      updateCost(-100);
    }
  });

  const nodeWs = document.getElementById("node");
  nodeWs.type = 'checkbox';

  nodeWs.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      jsLibs.disabled = true;
      document.getElementById("3").style.color = "gray";
      updateCost(100);
    } else {
      jsLibs.disabled = false;
      document.getElementById("3").style.color = "black";
      updateCost(-100);
    }
  });

  const buildTools = document.getElementById("build-tools");
  buildTools.type = 'checkbox';

  buildTools.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      updateCost(100);
    } else {
      updateCost(-100);
    }
  });

  const npmWs = document.getElementById("npm");
  npmWs.type = 'checkbox';

  npmWs.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      updateCost(100);
    } else {
      updateCost(-100);
    }
  });

  /////////////////////////////////
  //// *** Payment Section ***
  /////////////////////////////////////

  // Hide HTML elements until proper selection is made
  $('#paypal, #bitcoin').hide();

  // Function to display credit card, bitcoin message or paypal message depending on user selection
  $('#payment').change(function(){
  	if ($('#payment option:selected').val() === "paypal") {
  		$('#credit-card, #bitcoin').hide();
  		$('#paypal').show();
  	} else if ($('#payment option:selected').val() === "bitcoin") {
  		$('#credit-card, #paypal').hide();
  		$('#bitcoin').show();
  	} else {
  		$('#credit-card').show();
  		$('#paypal, #bitcoin').hide();
  	}
  });


  // Create the variables to hold expected values for input fields

  var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  var creditCard = /\b\d{4}(| |-)\d{4}\1\d{4}\1\d{4}\b/g;
  var zipCode = /^\d{5}(?:[-\s]\d{4})?$/;
  var errorMessage ="";

  // $('form').prepend('<p id="error-message"></p>')
  // $('#error-message').hide();
  $('form').submit(function (e){
    $('#email-error').hide();
    $('#activity-error').hide();
    $('#cc-error').hide();
    $('#name-error').hide();
    $('#cc-zip-error').hide();
    $('#cc-cvv-error').hide();


    // So for the validation, check to see if the form was filled out properly, if not, show error at top.
    // Name field validation
	if ( $('#name').val() === "" ) {
		$("html, body").animate({scrollTop: 0}, "slow");
    errorMessage = "<br> <p id='name-error' style='color:red; font-size:16px;';> Error: Name field cannot be empy, please enter a Name. </p>";
    $("#name_field").append(errorMessage);
		$('#name').focus();
    console.log("Error: no name was entered into the name field");
    e.preventDefault();
    return false;

    // Email Field Validation
	} else if ( !emailAddress.test($('#mail').val()) ) {
		$("html, body").animate({scrollTop: $("#mail").offset().top}, "slow");
		errorMessage = "<br> <p id='email-error' style='color:red; font-size:16px;';> Error: Please enter a valid email. </p>";
    $("#mail-field").append(errorMessage);
		$('#mail').focus();
    console.log("Error: invalid email address entered");
    e.preventDefault();
    return false;

    // Activities Field Validation
	} else if ( $(".activities > label > input:checked").length === 0 ) {
    $("html, body").animate({scrollTop: $(".activities").offset().top}, "slow");
		errorMessage = "<p id='activity-error' style='color:red; font-size:16px';> Error: Please select at least one activity. </p>";
    $(".activities").prepend(errorMessage);
    $('.activities').focus();
    console.log("Error: One activity must be registered for");
    e.preventDefault();
    return false;

    // Credit Card Field Validation
	} else if ( $("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val()) )  {
		$("html, body").animate({scrollTop: $("#cc-num").offset().top}, "slow");
    errorMessage = "<br><p id='cc-error' style='color:red; font-size:16px;'> Error: Please enter a valid credit card number. </p>";
    $('#payment-heading').append(errorMessage);
		$('#cc-num').focus();
    console.log("Error: invalid credit card entered or missing card info");
    e.preventDefault();
    return false;

    // Zip Code Field Validation
	} else if ( $("#payment").val() === "credit card" && !zipCode.test($("#zip").val()) )  {
    $("html, body").animate({scrollTop: $("#cc-num").offset().top}, "slow");
    errorMessage = "<br><p id='cc-zip-error' style='color:red; font-size:16px;'> Error: Please enter a valid zip code. </p>";
    $('#payment-heading').append(errorMessage);
		$('#zip').focus();
    console.log("Error: invalid credit card entered or missing card info");
    e.preventDefault();
    return false;

    // CVV Field Validation
	} else if ( $("#payment").val() === "credit card" && $("#cvv").val().length < 3)  {
    $("html, body").animate({scrollTop: $("#cc-num").offset().top}, "slow");
    errorMessage = "<br><p id='cc-cvv-error' style='color:red; font-size:16px;'> Error: Please enter a valid CVV number. </p>";
    $('#payment-heading').append(errorMessage);
		$('#cvv').focus();
    e.preventDefault();
    return false;
	} else {
    // Success Message
		$("html, body").animate({scrollTop: 0}, "slow");
		alert("Thank you for registering. Enjoy the conference!");
	}

});







  // --Ending brackets below this line
});
