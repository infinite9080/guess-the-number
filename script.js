'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

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
    displayMessage('❌ No number!');

    //   when player wins
  } else if (guess === secretNumber) {
    displayMessage('✅ Correct Number!');

    //   Show secret number
    document.querySelector('.number').textContent = secretNumber;

    //   Background color change
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Background transition
    document.querySelector('body').style.transition =
      'background-color 0.5s ease 0s';

    //   ? width change
    document.querySelector('.number').style.width = '30rem';

    //   ? transition
    document.querySelector('.number').style.transition =
      'width 0.4s linear 0.5s';

    // check high score

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //  when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 Game over');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  //   Background color change
  document.querySelector('body').style.backgroundColor = '#222';

  // Background transition
  document.querySelector('body').style.transition =
    'background-color 0.5s ease 0s';

  //   ? width change
  document.querySelector('.number').style.width = '15rem';

  //   ? transition
  document.querySelector('.number').style.transition = 'width 0.4s linear 0.5s';
});
