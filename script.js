let timeInterval;
document.getElementById('startButton').addEventListener('click', startTimer);   
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetInterval);
let hours = 0;
let minutes = 0;
let seconds = 0;

function updateTimer(){
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }if(minutes === 60){
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function startTimer(){
    timeInterval = setInterval(updateTimer, 1000);
}

function stopTimer(){
    clearInterval(timeInterval);
}

function resetInterval(){
    stopTimer();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    const timerDisplay = document.getElementById("num");
    timerDisplay.textContent = formatTime(hours) + " " + ":" + " " + formatTime(minutes) + " " + ":" + " " + formatTime(seconds);
  }

  function formatTime(time){
    return time < 10 ? "0" + time : time;
  }