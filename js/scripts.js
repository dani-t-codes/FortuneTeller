$(document).ready(function() {
  $("form#fortune-survey").submit(function(event) {
    event.preventDefault();
    let question1Total=0;
    let question2Total=0;
    $("input:checkbox[name=unlucky]:checked").each(function() {
        total += parseInt($(this).val()); 
    $("input:checkbox[name=lucky]:checked").each(function() {
        total += parseInt($(this).val()); 
        if ('total#lucky' > 'total#unlucky') {
          $('#good-luck-hurray').show();
        }
        else if ('total#unlucky' > 'total#lucky') {
          $('#bad-luck-blues').show();
        }
        else if ('total#Lucky' === 'total#Unlucky') {
          $('#try-again-later').show();
      }
    });
  
    });
  })
  }) 

//Steps 
//done 1 get total # of occurences of Q1 & Q2
//done 2 take #of  occurences and parseInt
//done 3 take parseInt & add # occurences under Q1 & Q2
//done 4 if/else if statements
//5 results page



