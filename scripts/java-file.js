
const score = JSON.parse(localStorage.getItem('score')) || { Wins: 0, Loses: 0, Ties: 0 };


updateScoreElements();




function playgame(playermove) {
  const computermove = pickComputerMove();
  let result = '';

  if (playermove === 'Rock') {
    if (computermove === 'Rock') {
      result = 'Tie';
    } else if (computermove === 'Paper') {
      result = 'You Lose :(';
    } else if (computermove === 'Scissors') {
      result = 'You win :)';
    }
  } 
  
  
  
  else if (playermove === 'Paper') {
    if (computermove === 'Rock') {
      result = 'You win :)';
    } else if (computermove === 'Paper') {
      result = 'Tie';
    } else if (computermove === 'Scissors') {
      result = 'You Lose :(';
    }
  } 
  
  
  else if (playermove === 'Scissors') {
    if (computermove === 'Rock') {
      result = 'You Lose :(';
    } else if (computermove === 'Paper') {
      result = 'You win :)';
    } else if (computermove === 'Scissors') {
      result = 'Tie';
    }
  }

  if (result === 'You win :)') {
    score.Wins += 1;
  } else if (result === 'You Lose :(') {
    score.Loses += 1;
  } else if (result === 'Tie') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElements();


document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `You-
<img src="../images/${playermove}-emoji.png" class="move-icon">
<img src="../images/${computermove}-emoji.png" class="move-icon">-Computer`;

}

function updateScoreElements(){
  document.querySelector('.js-score')
.innerHTML= `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`;
}

function pickComputerMove() {
  const randomnumber = Math.random();
  let computermove = '';

  if (randomnumber < 1/3) {
    computermove = 'Rock';
  } else if (randomnumber < 2/3) {
    computermove = 'Paper';
  } else {
    computermove = 'Scissors';
  }
  return computermove;
}
