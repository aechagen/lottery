// Groups 
// var groupOne   =  [["panda_bearry", 1], ["blue elsa", 5], ["duhkawaiipanda", 3], 
//                   ["mariakawaiistudio", 3], ["patricia", 3], ["chazzerae", 4]];

// var groupTwo   =  [["duhkawaiipanda", 1], ["chazzerae", 2], ["totallytida", 14], 
//                   ["ventanablanca", 1]];
// var groupThree =  [["panda_bearry", 3], ["blueelsa", 5], ["totallytida", 7], 
//                   ["duhkawaiipanda", 1], ["ventanablanca", 2]];

// Prizes


// panda: 5
// elsa:  
var prizeOne   = [5, 18, 4, 16, 15, 28, 6, 7, 3, 5, 17, 24, 4, 1, 27, 5, 22, 11, "Congratulations winners!"];
var prizeTwo   = [3, 10, 5, 28, 26, 27, 1, 8, 13, 12, 22, 5, 4, 9, 14, 19, 5, 20, "Congratulations winners!"];
var prizeThree = [16, 5, 19, 14, 24, 23, 6, 9, 4, 5, 1, 12, 26, 3, 10, 17, 15, 21, "Congratulations winners!"];

// Prints prize for group one
function getPrize() {
  var prize = prizeOne.shift(); 
  $("#output").html(prize)
}

// Prints prize for group two
function getPrizeTwo() {
  var prizeTwoResult = prizeTwo.shift();
  $('#outputTwo').html(prizeTwoResult);
}

// Prints prize for group three
function getPrizeThree() {
  var prizeThreeResult = prizeThree.shift();
  $('#outputThree').html(prizeThreeResult);
}

function addColor(){
  $(".list-group-item").addClass("boom");
}