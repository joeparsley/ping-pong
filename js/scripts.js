//BACK-END-LOGIC:

// Takes user input, turnts it into and Array and displays!
var countToInput = function(input) {
  var result = [];
  for (var i = 1; i <= input; i++) {
    result.push(i);
  }
  return result;
};



var pingPong = function(input){
 var output = countToInput(input)
 return output;
}



//FRONT-END-LOGIC:
$(document).ready(function() {
  $('#user-form').submit(function(event) {
    event.preventDefault();
    var input = parseInt($('#number-input').val());
    result = pingPong(input);
    $('#number-output').text(result);
  });
});
