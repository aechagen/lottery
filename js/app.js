// Groups 
// var groupOne   =  [["panda_bearry", 1], ["blue elsa", 5], ["duhkawaiipanda", 3], 
//                   ["mariakawaiistudio", 3], ["patricia", 3], ["chazzerae", 4]];

// var groupTwo   =  [["duhkawaiipanda", 1], ["chazzerae", 2], ["totallytida", 14], 
//                   ["ventanablanca", 1]];
// var groupThree =  [["panda_bearry", 3], ["blueelsa", 5], ["totallytida", 7], 
//                   ["duhkawaiipanda", 1], ["ventanablanca", 2]];

// Prizes


var prizeOne   = [25, 42, 32, 65, 1, 13, 15, 14, 17, 20, 44, 56, 76, 23, 21, 12];
var prizeTwo   = [25, 42, 32, 65, 2, 13, 15, 14, 17, 20, 44, 56, 76, 23, 21, 12];
var prizeThree = [25, 42, 32, 65, 3, 13, 15, 14, 17, 20, 44, 56, 76, 23, 21, 12];

// Let's get it.

function getPrize() {
  var prize = prizeOne.shift(); // Each time getPrize() runs, takes off one array until undefined. 
  alert(prize);
}