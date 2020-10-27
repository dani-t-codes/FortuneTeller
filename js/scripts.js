$(document).ready(function() {
  $("form#fortune-survey").submit(function(event) {
    event.preventDefault();
    let question1Total=0;
    let question2Total=0;
    let userResponse1 = [];
    let userResponse2 = [];
    $("input:checkbox[name=unlucky]:checked").each(function() {
        question1Total += parseInt($(this).val()); 
        userResponse1.push(question1Total);
    });
    $("input:checkbox[name=lucky]:checked").each(function() {
        question2Total += parseInt($(this).val()); 
        userResponse2.push(question2Total);

        if (userResponse2.length > userResponse1.length) {
          $('#good-luck-hurray').show();
        }
        else if (userResponse1.length > userResponse2.length) {
          $('#bad-luck-blues').show();
        }
        else if (userResponse1.length === userResponse2.length) {
          $('#try-again-later').show();
      };
    });
  
    });
  })

//Steps 
//done 1 get total # of occurences of Q1 & Q2
//done 2 take #of  occurences and parseInt
//done 3 take parseInt & add # occurences under Q1 & Q2
//done 4 if/else if statements
//5 results page



