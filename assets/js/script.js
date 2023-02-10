//Get elements from time area  

const hourDiv = document.querySelector('.hour');
const minuteDiv = document.querySelector('.minute');
const secondDiv = document.querySelector('.second');
const millisecondDiv = document.querySelector('.millisecond');

let hours = 0, minutes = 0, seconds = 0, milliseconds = 0, interval;

/**
 * This function takes a time as parameter and checks if it is less than 10. 
 * If yes, the function returns the time value with a zero in front of it, 
 * in the form of a string. And returns the time value without modification 
 * if the time value is 10 or greater.
 */
function checkTime(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }

/**
 * The function updates the inner text of div elements with the current value of time. 
 */  
function displayTime() {
    hourDiv.innerText = checkTime(hours);
    minuteDiv.innerText = checkTime(minutes);
    secondDiv.innerText = checkTime(seconds);
    millisecondDiv.innerText = checkTime(milliseconds);
  }
 /**
  * The function starts a timer that increments milliseconds every 10 Msec.
  *  When the Msec reach 100, the seconds are incremented and the Msec 
  * are reset to 0. Similar checks are made for minutes and hours.
  */ 
function startTimer() {
interval = setInterval(() => {
milliseconds++;

    if (milliseconds === 100) {
        seconds++;
        milliseconds = 0;
    }
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }

    displayTime()
}, 10);
}

const startButton = document.querySelector('.start');
startButton.addEventListener('click', startTimer);

const stopButton = document.querySelector('.stop');
stopButton.addEventListener('click', () => {
clearInterval(interval);
});