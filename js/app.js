var max= Math.floor(Math.random() * 100);
alert('Guess a number between 1 and' + max);

$('[data-guess]').on('submit', function(event) {
  event.preventDefault();
  var passThis = $('input[name="user-guess"]').val();

  if(passThis < Math.floor(max/2-1)) {
    alert(passThis + ' was too low');
  } else if(passThis == Math.floor(max/2)) {
    alert("Congratulations, you've guessed the number in num guesses!");
  } else if(passThis > Math.floor(max/2) && passThis <= max  ) {
    alert(passThis + ' was too high');
  } else {
    alert('Invalid input, must enter a number between 0 and ' + max);
  };
});

function myFunction() {
  window.location.reload();
}
