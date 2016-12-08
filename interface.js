$(document).ready(function() {

  $( "a" ).addClass( "test" );
  $("a").click(function(event){
    alert("Who dun whaaaat?!");
    event.preventDefault();
    $( this ).fadeOut( "slow" );
  });




});

$(document).ready(function() {
  var thermostat = new Thermostat();
  displayTemperature()

  function displayTemperature() {
    $('#temperature').text(thermostat.currentTemperature + "°C");
  }


  $('#temperature-up').click(function() {
    thermostat.up();
    displayTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    displayTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.reset();
    displayTemperature();
  })


});
