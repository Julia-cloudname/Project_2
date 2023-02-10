//Area displays time
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
