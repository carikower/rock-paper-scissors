
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
  }
    // Tuvimos que volver a convertirlo en object porque antes lo convertimos en string para poder usar localStorage (solo soporta strings)
    // "||" sets a default, if score doesn't exist. If it doesn't exist, it'll put 0,0,0 in score
    /*
    if (!score) {   //checkea si score es null
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      };
    }
    */
	
	updateScoreElement();

	function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'scissors') {        
          if (computerMove === 'rock') {result = 'You Lose.'}
          else if (computerMove === 'paper') {result = 'You Win.'}
          else {result = 'Tie.'};
          }
    
    else if (playerMove === 'paper') {
          if (computerMove === 'rock') {result = 'You Win.'}
          else if (computerMove === 'paper') {result = 'Tie.'}
          else {result = 'You Lose.'};
          }
    
    else if (playerMove === 'rock') {
          if (computerMove === 'rock') {result = 'Tie.'}
          else if (computerMove === 'paper') {result = 'You Lose.'}
          else {result = 'You Win.'};
          }
    
    
    if (result === 'You Win.') {score.wins++;} 
    else if (result === 'You Lose.') {score.losses++;} 
    else if (result === 'Tie.') {score.ties++;}    

    localStorage.setItem('score', JSON.stringify(score)); //localStorage only supports strings
		
		document.querySelector('.js-result').innerHTML = result;

		document.querySelector('.js-moves').innerHTML = `YOU
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  COMPUTER`;

		updateScoreElement();

  }
	

	function updateScoreElement() {
		document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`		
	}



  function pickComputerMove() {

  let computerMove = '';
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1/3) {computerMove = 'rock'}
  else if (randomNumber >= 1/3 && randomNumber  < 2/3) {computerMove = 'paper'}
  else if (randomNumber >= 0 && randomNumber <= 1)  {computerMove = 'scissors'};
  
  return computerMove;
  }



