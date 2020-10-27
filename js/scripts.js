$(document).ready(function() {
  $("form#fortune-survey").submit(function(event) {
    event.preventDefault();
    let total=0;
    $("input:checkbox[name=unlucky]:checked").each(function() {
        total += parseInt($(this).val()); 
        //if numberOfLucky > numberofUnlucky {}
      //  then #good-luck-hurray;
      //else if numbefOfUnlucky > numberOfLucky {}
      //  then #bad-luck-blues;
      //else if numberOfLucky === numberOfUnlucky {}
      //  then #try-again-later;
    });
    $("input:checkbox[name=lucky]:checked").each(function() {
      total += parseInt($(this).val()); 
      //if numberOfLucky > numberofUnlucky {}
      //  then #good-luck-hurray;
      //else if numbefOfUnlucky > numberOfLucky {}
      //  then #bad-luck-blues;
      //else if numberOfLucky === numberOfUnlucky {}
      //  then #try-again-later;
    });
  })
  }) 

//Steps 
//1 get total # of occurences of Q1 & Q2
//2 take #of  occurences and parseInt
//3 take parseInt & add # occurences under Q1 & Q2
//4 if/else if statements
//5 results page



