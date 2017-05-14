//BACK-END-LOGIC:
var pingPong = function(input) {
  var userArray = [];
  for (var i = 0; i <= input; i++) {
    if ((i % 3 === 0) && (i % 5 !== 0)) {
      userArray.push("ping");
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      userArray.push("pong");
    } else if (i % 15 === 0) {
      userArray.push("ping-pong");
    } else {
      userArray.push(" " + i );
    }
  }
  return userArray;
}
//FRONT-END-LOGIC:
$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    $("number-output").empty();
    var input = parseInt($('#number-input').val());
    var result = pingPong(input);
    result.forEach(function(element) {
      $('#number-output').append( '<li>' + element + '</li>')
    })
  });
});
