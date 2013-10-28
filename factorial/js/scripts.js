function factor(number) {
  var result = 1;
  for (var i = number; i > 0; i--) {
    result = (i)*result;
  }
  return result;
}

$(function() {
  $("form#factor").submit(function() {
    var number = $("input#integer").val();
     $("div#result").hide().fadeIn(500);

    if (!$.isNumeric(number) || number < 0 || number % 1 > 0) {   
      $("#result").empty().append("That is <strong>not</strong> an integer (<strong>a positive whole number</strong>)!");
    } else {
      $("#result").empty().append("The factorial of <strong>" + number + "</strong> is <strong>" + factor(number) + "</strong>");
    }

    $("input#integer").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#result").fadeOut();
  });
});