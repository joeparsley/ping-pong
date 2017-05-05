//BACK-END-LOGIC:










//FRONT-END-LOGIC:
$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('#number-input').val());

    $('#number-output').text(input);
  });
});
