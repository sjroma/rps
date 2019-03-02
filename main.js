//Scissors cuts Paper
//Paper covers Rock
//Rock crushes Lizard
//Lizard poisons Spock
//Spock smashes Scissors
//Scissors decapitates Lizard
//Lizard eats Paper
//Paper disproves Spock
//Spock vaporizes Rock
//and, as it always has, Rock crushes Scissors
// Hail Sam Kass (and Karen Bryla)
// Hint: Open console to see results too

var win = 0;
var loss = 0;
var tie = 0;
alert('Play Rock, Paper, Scissors, Lizard, Spock against the computer.\n Click OK to begin.');

while (true) {

  var user_select = prompt("Select either Rock, Paper, Scissors, Lizard or Spock");
  var rpsls = ["rock", "paper", "scissors", "lizard", "spock"];
  var computer = rpsls[Math.floor(Math.random() * rpsls.length)];

  function winner(computer, user_select) {
    if (computer === user_select.toLowerCase()) {
      tie = tie + 1, result = "You've tied!";
    } else if (computer === "rock" && user_select.toLowerCase() === "paper") {
      win = win + 1, result = "Paper covers Rock...You win!";
    } else if (computer === "rock" && user_select.toLowerCase() === "scissors") {
      loss = loss + 1, result = "Rock crushes Scissors...You lose!";
    } else if (computer === "rock" && user_select.toLowerCase() === "lizard") {
      loss = loss + 1, result = "Rock crushes Lizard...You lose!";
    } else if (computer === "rock" && user_select.toLowerCase() === "spock") {
      win = win + 1, result = "Spock vaporizes Rock...You win!";
    } else if (computer === "paper" && user_select.toLowerCase() === "rock") {
      loss = loss + 1, result = "Paper covers Rock...You lose!";
    } else if (computer === "paper" && user_select.toLowerCase() === "scissors") {
      win = win + 1, result = "Scissors cuts Paper...You win!";
    } else if (computer === "paper" && user_select.toLowerCase() === "lizard") {
      win = win + 1, result = "Lizard eats Paper...You win!";
    } else if (computer === "paper" && user_select.toLowerCase() === "spock") {
      loss = loss + 1, result = "Paper disproves Spock...You lose!";
    } else if (computer === "scissors" && user_select.toLowerCase() === "rock") {
      win = win + 1, result = "Rock crushes Scissors...You win!";
    } else if (computer === "scissors" && user_select.toLowerCase() === "paper") {
      loss = loss + 1, result = "Scissors cuts Paper...You lose!";
    } else if (computer === "scissors" && user_select.toLowerCase() === "lizard") {
      loss = loss + 1, result = "Scissors decapitates Lizard...You lose!";
    } else if (computer === "scissors" && user_select.toLowerCase() === "spock") {
      win = win + 1, result = "Spock smashes Scissors...You win!";
    } else if (computer === "lizard" && user_select.toLowerCase() === "rock") {
      win = win + 1, result = "Rock crushes Lizard...You win!";
    } else if (computer === "lizard" && user_select.toLowerCase() === "paper") {
      loss = loss + 1, result = "Lizard eats Paper...You lose!";
    } else if (computer === "lizard" && user_select.toLowerCase() === "scissors") {
      win = win + 1, result = "Scissors decapitates Lizard...You win!";
    } else if (computer === "lizard" && user_select.toLowerCase() === "spock") {
      loss = loss + 1, result = "Lizard poisons Spock...You lose!";
    } else if (computer === "spock" && user_select.toLowerCase() === "rock") {
      loss = loss + 1, result = "Spock vaporizes Rock...You lose!";
    } else if (computer === "spock" && user_select.toLowerCase() === "paper") {
      win = win + 1, result = "Paper disproves Spock...You win!";
    } else if (computer === "spock" && user_select.toLowerCase() === "scissors") {
      loss = loss + 1, result = "Spock smashes Scissors...You lose!";
    } else if (computer === "spock" && user_select.toLowerCase() === "lizard") {
      win = win + 1, result = "Lizard poisons Spock...You win!";
    } else {
      result = "You made an invalid choice...there is no winner.\n Choose either rock, paper, scissors, lizard or spock.";
    }

    return result;
  }

  alert(' You selected ' + user_select + '.\n The computer selected ' + computer +
    '.\n \n' + (winner(computer, user_select)) + '\n Wins - ' + win + '\n Losses - ' + loss + '\n Ties - ' + tie);

  //  having the alert and console.log at the same time causes the count to increment incorrectly
  //  console.log("You selected -", user_select);
  //  console.log("The computer selected -", computer);
  //  console.log(winner(computer, user_select));
  //  console.log("Wins -", win, "Losses -", loss, "Ties -", tie);
}
