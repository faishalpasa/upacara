const flagPoleElement = document.getElementById('flag-pole');
const charactersElement = document.getElementById('characters');
const chatBubbleElement = document.getElementById('chat-bubble');
const flagElement = document.getElementById('flag');
const flagWaveElement = document.getElementById('flagwave');
const buttonWrapperElement = document.getElementById('button-wrapper');
const actionButtonWrapperElement = document.getElementById('action-button-wrapper');
const pointWrapperElement = document.getElementById('point');
const totalPointWrapperElement = document.getElementById('total-point');
const backgroundElement = document.getElementById('background');
const overlayElement = document.getElementById('overlay');
const audio = document.getElementById('audio');

let point = 0;
let seconds = 0;
let click = 0;
pointWrapperElement.innerText = click;
let audioDuration = 0
let durationInterval

const handlePlayAudio = () => {
  audio.play();
}

const handlePlayCeremony = () => {
  handlePlayAudio()

  chatBubbleElement.style.opacity = '0';
  charactersElement.style.transition = `opacity 0.5s`;

  actionButtonWrapperElement.style.bottom = '16px';
  actionButtonWrapperElement.style.transition = `bottom 1s`;

  pointWrapperElement.style.top = '16px';
  pointWrapperElement.style.transition = `top 1s`;

  durationInterval = setInterval(() => {
    handleCountDuration()
  }, [1000])

  audioDuration = Math.floor(audio.duration)
}

const handleCountDuration = () => {
  seconds += 1;

  if (seconds > audioDuration) {
    clearInterval(durationInterval)
    actionButtonWrapperElement.style.bottom = '-116px';
    actionButtonWrapperElement.style.transition = `bottom 1s`;
    pointWrapperElement.style.top = '-116px';
    pointWrapperElement.style.transition = `top 1s`;
    overlayElement.style.display = 'block';
  }
}

const handleClickStartButton = () => {
  buttonWrapperElement.style.bottom = '-10%';
  buttonWrapperElement.style.transition = `bottom 1s`;

  flagPoleElement.style.right = '0%';
  flagPoleElement.style.transition = `right 1s`;

  charactersElement.style.left = '0%';
  charactersElement.style.transition = `left 1s`;

  setTimeout(() => {
    chatBubbleElement.style.opacity = '1';
    chatBubbleElement.style.transition = `opacity 0.5s`;
  }, 1000)

  setTimeout(() => {
    handlePlayCeremony();
  }, 4000)
}

const handleClickActionButton = () => {
  let clickPoint = 0;
  if (click < 100 && seconds < audioDuration) {
    click += 1;
    clickPoint = click + seconds;
    point = point + clickPoint;
    pointWrapperElement.innerText = point;
    totalPointWrapperElement.innerText = point;
    flagElement.style.bottom = `calc(${click}% - 200px)`;
    flagElement.style.transition = `bottom 0.5s`;
  }

  const clickPointElement = document.createElement('div');
  clickPointElement.classList.add('click-point');
  clickPointElement.innerText = `+${clickPoint}`;

  backgroundElement.appendChild(clickPointElement);
  setTimeout(() => {
    clickPointElement.style.bottom = '140px';
    clickPointElement.style.transition = `bottom 0.9s`;
  }, 100);
  setTimeout(() => clickPointElement.remove(), 1000);
}

