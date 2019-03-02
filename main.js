var win = 0;
var loss = 0;
var tie = 0;
alert('Play Rock, Paper, Scissors, Lizard, Spock against the computer.\n Click OK to begin.');

//Game will continue until user opts out
while (true) {

  //Get users choice and set to lowercase
  var user_select = prompt("Select either Rock, Paper, Scissors, Lizard or Spock").toLowerCase();
  //Get the computers choice
  var rpsls = ["rock", "paper", "scissors", "lizard", "spock"];
  var computer = rpsls[Math.floor(Math.random() * rpsls.length)];

  function winner(computer, user_select) {
    if (computer === user_select.toLowerCase()) {
      tie++; result = "You've tied!";
    } else if (computer === "rock" && user_select === "paper") {
      win++; result = "Paper covers Rock...You win!";
    } else if (computer === "rock" && user_select === "scissors") {
      loss++; result = "Rock crushes Scissors...You lose!";
    } else if (computer === "rock" && user_select === "lizard") {
      loss = loss + 1, result = "Rock crushes Lizard...You lose!";
    } else if (computer === "rock" && user_select === "spock") {
      win++; result = "Spock vaporizes Rock...You win!";
    } else if (computer === "paper" && user_select === "rock") {
      loss++; result = "Paper covers Rock...You lose!";
    } else if (computer === "paper" && user_select === "scissors") {
      win++; result = "Scissors cuts Paper...You win!";
    } else if (computer === "paper" && user_select === "lizard") {
      win++; result = "Lizard eats Paper...You win!";
    } else if (computer === "paper" && user_select === "spock") {
      loss++; result = "Paper disproves Spock...You lose!";
    } else if (computer === "scissors" && user_select === "rock") {
      win++; result = "Rock crushes Scissors...You win!";
    } else if (computer === "scissors" && user_select === "paper") {
      loss++; result = "Scissors cuts Paper...You lose!";
    } else if (computer === "scissors" && user_select === "lizard") {
      loss++; result = "Scissors decapitates Lizard...You lose!";
    } else if (computer === "scissors" && user_select === "spock") {
      win++; result = "Spock smashes Scissors...You win!";
    } else if (computer === "lizard" && user_select === "rock") {
      win++; result = "Rock crushes Lizard...You win!";
    } else if (computer === "lizard" && user_select === "paper") {
      loss++; result = "Lizard eats Paper...You lose!";
    } else if (computer === "lizard" && user_select === "scissors") {
      win++; result = "Scissors decapitates Lizard...You win!";
    } else if (computer === "lizard" && user_select === "spock") {
      loss++; result = "Lizard poisons Spock...You lose!";
    } else if (computer === "spock" && user_select === "rock") {
      loss++; result = "Spock vaporizes Rock...You lose!";
    } else if (computer === "spock" && user_select === "paper") {
      win++; result = "Paper disproves Spock...You win!";
    } else if (computer === "spock" && user_select === "scissors") {
      loss++; result = "Spock smashes Scissors...You lose!";
    } else if (computer === "spock" && user_select === "lizard") {
      win++; result = "Lizard poisons Spock...You win!";
    } else {
      result = "You made an invalid choice...there is no winner.\n Choose either rock, paper, scissors, lizard or spock.";
    }

    return result;
  }

  //Pop-up the game result and show running total of wins, losses and ties
  alert(' You selected ' + user_select + '.\n The computer selected ' + computer +
    '.\n \n' + (winner(computer, user_select)) + '\n Wins - ' + win + '\n Losses - ' + loss + '\n Ties - ' + tie);

  //  having the alert and console.log at the same time causes the count to increment incorrectly
  //  console.log("You selected -", user_select);
  //  console.log("The computer selected -", computer);
  //  console.log(winner(computer, user_select));
  //  console.log("Wins -", win, "Losses -", loss, "Ties -", tie);
}
