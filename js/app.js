var max = 10
alert('Guess a number between 1 and' + max);


$('[data-guess]').on('submit', function() {
  var passThis = $('input[name="user-guess"]').val();

  if(passThis < 5) {
    alert(passthis + ' was too low');
  } else if(passThis === 6) {
    alert("Congratulations, you've guessed the number in num guesses!");
  } else if(passThis > 6 && passThis < 11 ) {
    alert(passthis + ' was too high');
  } else {
    alert('Invalid input, must enter a number between 0 and ' + max);
  };
});

