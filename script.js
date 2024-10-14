const playerScore = document.querySelector('.player-score');
const playerChoice = document.querySelector('.player-choice');
const computerScore = document.querySelector('.computer-score');
const computerChoiceEl = document.querySelector('.computer-choice');

const playerRock = document.querySelector('.player-rock');
const playerPaper = document.querySelector('.player-paper');
const playerScissors = document.querySelector('.player-scissors');
const playerLizard = document.querySelector('.player-lizard');
const playerSpock = document.querySelector('.player-spock');

const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');
const computerLizard = document.querySelector('.computer-lizard');
const computerSpock = document.querySelector('.computer-spock');

const icons = document.querySelectorAll('.fa-solid');

const result = document.querySelector('h2');

let computerChoice;

let playerScoreNum = 0;
let computerScoreNum = 0;

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

function unselect () {
  icons.forEach((icon => {
    icon.classList.remove('selected')
  }))
}

function computerSelect () {
  let computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
      computerChoice = 'rock';
  } else if ( computerChoiceNumber <= 0.4 ) {
    computerChoice = 'paper';
  } else if ( computerChoiceNumber <= 0.6 ) {
    computerChoice = 'scissors';
  } else if ( computerChoiceNumber <= 0.8 ) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock'
  }

  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = 'Computer Choose Rock.';
      break;
    
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = 'Computer Choose Paper.';
      break;
    
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = 'Computer Choose Scissors.';
      break
  
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = 'Computer Choose Lizard.';
      break;
      
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = 'Computer Choose Spock.';
      break;
    
    default:
      break;
   }

}

function compareResult(playerSelect) {
    computerSelect();
    if (playerSelect == computerChoice) {
      result.textContent = "It's a tie!";
      result.style.color = 'dodgerblue';
    } else {
      let index = choices[playerSelect]['defeats'].indexOf(computerChoice);
      if (index > -1) {
        result.textContent = "You Won!";
        result.style.color = 'green';
        playerScoreNum++
        playerScore.textContent = `You - ${playerScoreNum}`
      } else {
        result.textContent = "You Lost!";
        result.style.color = 'rgb(179, 45, 45)';
        computerScoreNum++
        computerScore.textContent = `Computer - ${computerScoreNum}`
      }
      
    }
}


function select (playerSelect) {  
  unselect();
  
  switch (playerSelect) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoice.textContent = 'You Choose Rock.';
      break;
    
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoice.textContent = 'You Choose Paper.';
      break;
    
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoice.textContent = 'You Choose Scissors.';
      break
  
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoice.textContent = 'You Choose Lizard.';
      break;
      
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoice.textContent = 'You Choose Spock.';
      break;
    
    default:
      break;
   }

  compareResult(playerSelect);
}

function resetAll () {
  unselect();
  playerChoice.textContent = '';
  computerChoiceEl.textContent = '';

  playerScoreNum = 0;
  playerScore.textContent = `You - ${playerScoreNum}`;

  computerScoreNum = 0;
  computerScore.textContent = `Computer - ${computerScoreNum}`;

  result.textContent = "";
}