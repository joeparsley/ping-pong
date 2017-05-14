//BACK-END-LOGIC:



//FRONT-END-LOGIC:
$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('#number-input').val());
    var result = pingPong(input);

    result.forEach(function(element) {
      $('#number-output').append( '<li>' + element + '</li>')
    })
  });
});
