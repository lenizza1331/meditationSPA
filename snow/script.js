document.querySelector('video').playbackRate = 1.50;
const button = document.querySelector('#btn');
button.addEventListener('click', function(){
    document.querySelector('#song').play();
    document.querySelector('#myVideo').play();
})
const stopMus = document.querySelector('#btnPause');
stopMus.addEventListener('click', function(){
    document.querySelector('#song').pause();
})

const timer = 5; 
let timerAmount = timer*60;
function calculate (){
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(timerAmount/60);
    let seconds = timerAmount%60;
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    else {
        seconds = seconds;
    }
    countdown.textContent = `${minutes}:${seconds}`
    timerAmount--;
    if (timerAmount < 0) {
  myStopFunction();
  timerAmount = 0;
}

else {
    timerAmount = timerAmount;
  }
}
let myTimer = setInterval(calculate, 1000);

function myStopFunction() {
    clearInterval(myTimer);
    }





