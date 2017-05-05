//BACK-END-LOGIC:
//replaces number divisible by 3 and replaces with "ping":
// var divisibleByThree = function(input) {
//    result = input.map(input) {
//     if ((i+1) % 3 === 0 ) {
//       return "ping";
//   }
//     return element;
//   })
//   return result;
// };


// Takes user input, turnts it into and Array and displays!
var countToInput = function(input) {
  var result = [];
  for (var i = 1; i <= input; i++) {
    result.push(i);
  }
  return result;
};



var pingPong = function(input){
 var output ;
 output = countToInput(input);

 return output;
}



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
