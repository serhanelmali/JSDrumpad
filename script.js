let isPressed = false;

function playSound(e) {
  console.log(isPressed);
  if (isPressed === false) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode || e.target.attributes['data-key'].value}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode || e.target.attributes['data-key'].value}"]`);
     if (!audio) return; // stops the function to avoid hitting invalid keys. 
    audio.currentTime = 0; //rewind. 
    audio.play();
    key.classList.add('playing');
    isPressed = true;
  }
  };

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skips property if it's not equal to transform.
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
    key.addEventListener('click', playSound)
  });

const toggleChecker = () =>  isPressed = false;
  
window.addEventListener('keydown', playSound);

window.addEventListener('keyup', toggleChecker);

window.addEventListener('mouseup', toggleChecker);

