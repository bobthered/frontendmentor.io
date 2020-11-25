// service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}

const transitionTime = 500;
let node = {};
// set computer options
const computerButtons = {
  classic: ['rock', 'paper', 'scissors'],
  advanced: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
};
let playerIndex, computerIndex;
document.addEventListener('DOMContentLoaded', () => {
  // document.querySelector('body').scrollTop = 0;
  document.documentElement.style.setProperty(
    '--transition',
    `${transitionTime}ms`,
  );
  // cache query selectors
  node = {
    computerButtons: document.querySelectorAll('.computer button'),
    main: document.querySelector('main'),
    options: {
      close: document.querySelector('.modal.options button'),
      modal: document.querySelector('.modal.options'),
      modes: document.querySelectorAll('.modal.options input[name="mode"]'),
      show: document.querySelector('button.options'),
    },
    modalBG: document.querySelector('.modal-bg'),
    playerButtons: document.querySelectorAll('.player button'),
    playAgainButton: document.querySelector('.play-again'),
    rules: {
      close: document.querySelector('.modal.rules button'),
      modal: document.querySelector('.modal.rules'),
      show: document.querySelector('button.rules'),
    },
    scoreValue: document.querySelector('.header .score .value'),
    status: document.querySelector('.status h1'),
  };
  updateMode();
  updateScore();
  // add option click event listeners
  node.playerButtons.forEach(button => {
    button.addEventListener('click', () => {
      // check for what step we're on
      if (node.main.getAttribute('step') === '1') {
        playerIndex = [...node.playerButtons].indexOf(button);
        button.classList.add('selected');
        node.main.setAttribute('step', '2');
        setTimeout(() => {
          // get random index
          const index = Math.floor(
            Math.random() *
              computerButtons[node.main.getAttribute('mode')].length,
          );
          computerAnimation(250, index);
        }, transitionTime);
      }
    });
  });
  // add modal options
  node.rules.close.addEventListener('click', () => {
    node.modalBG.classList.remove('show');
    node.rules.modal.classList.remove('show');
  });
  node.rules.show.addEventListener('click', () => {
    node.modalBG.classList.add('show');
    node.rules.modal.classList.add('show');
  });
  node.options.close.addEventListener('click', () => {
    node.modalBG.classList.remove('show');
    node.options.modal.classList.remove('show');
  });
  node.options.show.addEventListener('click', () => {
    node.modalBG.classList.add('show');
    node.options.modal.classList.add('show');
  });
  node.modalBG.addEventListener('click', () => {
    node.modalBG.classList.remove('show');
    node.rules.modal.classList.remove('show');
    node.options.modal.classList.remove('show');
  });
  [...node.options.modes].forEach(elem => {
    elem.addEventListener('change', e => {
      updateMode(e.target.value);
    });
  });
  // add play again listener
  node.playAgainButton.addEventListener('click', () => {
    node.main.setAttribute('step', '1');
    node.computerButtons.forEach(elem => elem.classList.remove('selected'));
    node.playerButtons.forEach(elem => elem.classList.remove('selected'));
  });
});
const calculateScore = () => {
  let status;
  if (
    (playerIndex === 0 && computerIndex === 2) ||
    (playerIndex === 0 && computerIndex === 3) ||
    (playerIndex === 1 && computerIndex === 0) ||
    (playerIndex === 1 && computerIndex === 4) ||
    (playerIndex === 2 && computerIndex === 1) ||
    (playerIndex === 2 && computerIndex === 3) ||
    (playerIndex === 3 && computerIndex === 4) ||
    (playerIndex === 3 && computerIndex === 1) ||
    (playerIndex === 4 && computerIndex === 2) ||
    (playerIndex === 4 && computerIndex === 0)
  )
    status = 'Win';
  // lose
  if (
    (playerIndex === 0 && computerIndex === 1) ||
    (playerIndex === 0 && computerIndex === 4) ||
    (playerIndex === 1 && computerIndex === 2) ||
    (playerIndex === 1 && computerIndex === 3) ||
    (playerIndex === 2 && computerIndex === 0) ||
    (playerIndex === 2 && computerIndex === 4) ||
    (playerIndex === 3 && computerIndex === 2) ||
    (playerIndex === 3 && computerIndex === 0) ||
    (playerIndex === 4 && computerIndex === 1) ||
    (playerIndex === 4 && computerIndex === 3)
  )
    status = 'Lose';
  // tie
  if (playerIndex === computerIndex) status = 'Tie';

  node.status.innerHTML = `YOU ${status}`;
  node.main.setAttribute('step', '3');
  updateScore(status);
};
const computerAnimation = (duration, index) => {
  if (duration > 0) {
    setTimeout(() => {
      // hide all computer buttons
      node.computerButtons.forEach(elem => elem.classList.remove('selected'));
      node.computerButtons[index].classList.add('selected');
      duration = Math.floor((duration * 0.9) / 30) * 30;
      index++;
      if (index > computerButtons[node.main.getAttribute('mode')].length - 1)
        index = 0;
      computerAnimation(duration, index);
    }, duration);
  } else {
    computerIndex = index - 1;
    if (computerIndex < 0)
      computerIndex =
        computerButtons[node.main.getAttribute('mode')].length - 1;
    calculateScore();
  }
};
const updateMode = (mode = '') => {
  if (localStorage.getItem('mode') === null)
    localStorage.setItem('mode', 'classic');
  if (mode !== '') localStorage.setItem('mode', mode);
  mode = localStorage.getItem('mode');
  node.options.modes[mode === 'classic' ? 0 : 1].checked = true;
  node.main.setAttribute('mode', mode);
};
const updateScore = status => {
  if (localStorage.getItem('score') === null)
    localStorage.setItem('score', '0');
  // get current score
  let score = +localStorage.getItem('score');
  score += status === 'Win' ? 1 : status === 'Lose' ? -1 : 0;
  localStorage.setItem('score', score);
  node.scoreValue.innerHTML = score;
};
