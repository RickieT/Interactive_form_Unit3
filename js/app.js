$(document).ready(function () {



  // Autofocus the Name field, however, this will occur if javascript is disabled, autofocus added to html element.
  $('#name').focus();

  // Display an input field if the job role 'other' is select_method
  $('#basic-info').append('<input type="text" id="other-field" placeholder="Your Job Title..." name="other_job">');



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
      buildTools.disabled = true;
      document.getElementById("6").style.color = "gray";
      updateCost(100);
    } else {
      updateCost(-100);
      expressWs.disabled = false;
      document.getElementById("4").style.color = "black";
      buildTools.disabled = false;
      document.getElementById("6").style.color = "black";
    }
  });

  const jsLibs = document.getElementById("js-libs");
  jsLibs.type = 'checkbox';

  jsLibs.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      nodeWs.disabled = true;
      document.getElementById("5").style.color = "gray";
      npmWs.disabled = true;
      document.getElementById("7").style.color = "gray";
      updateCost(100);
    } else {
      nodeWs.disabled = false;
      document.getElementById("5").style.color = "black";
      npmWs.disabled = false;
      document.getElementById("7").style.color = "black";
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
      buildTools.disabled = true;
      document.getElementById("6").style.color = "gray";
      updateCost(100);
    } else {
      jsFrameworks.disabled = false;
      document.getElementById("2").style.color = "black";
      buildTools.disabled = false;
      document.getElementById("6").style.color = "black";
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
      npmWs.disabled = true;
      document.getElementById("7").style.color = "gray";
      updateCost(100);
    } else {
      nodeWs.disabled = false;
      document.getElementById("3").style.color = "black";
      npmWs.disabled = false;
      document.getElementById("7").style.color = "black";
      updateCost(-100);
    }
  });

  const buildTools = document.getElementById("build-tools");
  buildTools.type = 'checkbox';

  buildTools.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      jsFrameworks.disabled = true;
      document.getElementById("2").style.color = "gray";
      expressWs.disabled = true;
      document.getElementById("4").style.color = "gray";
      updateCost(100);
    } else {
      jsFrameworks.disabled = false;
      document.getElementById("2").style.color = "black";
      expressWs.disabled = false;
      document.getElementById("4").style.color = "black";
      updateCost(-100);
    }
  });

  const npmWs = document.getElementById("npm");
  npmWs.type = 'checkbox';

  npmWs.addEventListener('change', (e) => {
    const isChecked = e.target.checked;
    if(isChecked) {
      jsLibs.disabled = true;
      document.getElementById("3").style.color = "gray";
      nodeWs.disabled = true;
      document.getElementById("5").style.color = "gray";
      updateCost(100);
    } else {
      jsLibs.disabled = false;
      document.getElementById("3").style.color = "black";
      nodeWs.disabled = false;
      document.getElementById("5").style.color = "black";
      updateCost(-100);
    }
  });






  // --Ending brackets below this line
});
