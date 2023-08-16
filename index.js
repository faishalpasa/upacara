const flagPoleElement = document.getElementById('flag-pole');
const charactersElement = document.getElementById('characters');
const chatBubbleElement = document.getElementById('chat-bubble');
const flagElement = document.getElementById('flag');
const flagWaveElement = document.getElementById('flagwave');
const buttonWrapper = document.getElementById('button-wrapper');
const audio = document.getElementById('audio');

const handlePlayAudio = () => {
  audio.play();
}

const handlePlayCeremony = () => {
  handlePlayAudio()
  const audioDuration = Math.floor(audio.duration)

  chatBubbleElement.style.opacity = '0';
  charactersElement.style.transition = `opacity 0.5s`;
  
  let seconds = 0;
  const percent = 100 / audioDuration;

  this.setInterval(() => {
    flagElement.style.bottom = `calc(100% - 200px)`;
    flagElement.style.transition = `bottom ${audioDuration}s`;
    seconds += 1;
  }, [1000])
}

const handleClickStartButton = () => {
  buttonWrapper.style.bottom = '-10%';
  buttonWrapper.style.transition = `bottom 1s`;

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

