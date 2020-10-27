$(document).ready(function() {
  $("form#fortune-survey").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=unlucky]:checked").each(function() {
      let question1 = (".sum:checked").
    });
    $("input:checkbox[name=lucky]:checked").each(function() {
      let question2 = (".sum:checked")
    });
  })
  }) 

//Steps 
//1 get total # of occurences of Q1 & Q2
//2 take #of  occurences and parseInt
//3 take parseInt & add # occurences under Q1 & Q2
//4 if/else if statements
//5 results page


// value of *all* checkboxes = 1. 
// parseInt to add total occurences of unluckyValue > luckyValue {
  //return #bad-luck-blues;
// }
// parseInt to add total occurences of luckyValue > unluckyValue {
//return #good-luck-hurray;
//}
//parseInt else if luckyValue === unluckyValue { 
//return #try-again-later;
//}

//if numberOfLucky > numberofUnlucky
//  then #good-luck-hurray
//else if numbefOfUnlucky > numberOfLucky
//  then #bad-luck-blues
//else if numberOfLucky === numberOfUnlucky
//  then #try-again-later

