//BACK-END-LOGIC:

var ping = ["ping"]
var pong = ["pong"]
var pongPing = ["ping-pong"]

//replaces number divisible by 3 and replaces with "ping":
// var divisibleByThree = function(input) {
//  input = input.map(function(element) {
//    return countToInput(element);
//  });
//   if (input[i] % 3 === 0) {
//     return input[i].splice(input[i], 1, "ping")
//   }
// };



// var divisibleByThree = function(input) {
//   var result;
//   for (var i = 0; i < divisibleByThree.length; i++) {
//     if ( i % 3 === 0) {
//       result.splice(index, 0, "ping")
//     }
//     else {
//       return result;
//     }
//   }
// };

// var result = input.map(function(element, i){
//   if ((i + 1) % 3 === 0) {
//     return "ping";
//   }
//   return element;
// })
// return result;


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
  output = divisibleByThree(input);
 console.log(output);
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
