'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Answer!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 2;
// console.log(document.querySelector('.guess').value);

let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
  }

  // when player wins
  else if (guess === secret) {
    // document.querySelector('.message').textContent = '🎉 Correct Answer!';
    displayMessage('🎉 Correct Answer!');
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secret) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secret ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secret ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😭 You lost the game';
      displayMessage('😭 You lost the game');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  // REFACTORING THE CODE
  // when guess is too high
  // else if (guess > secret && score > 1) {
  //   document.querySelector('.message').textContent = '📈 Too High!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }

  // // when guess is too low
  // else if (guess < secret && score > 1) {
  //   document.querySelector('.message').textContent = '📉 Too Low!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }

  // when player loses
  // else {
  //   document.querySelector('.message').textContent = '😭 You lost the game';
  //   document.querySelector('.score').textContent = 0;
  //   document.querySelector('body').style.backgroundColor = 'red';
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
