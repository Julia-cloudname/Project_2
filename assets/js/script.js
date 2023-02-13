document.addEventListener("DOMContentLoaded", () => {
  /**Area displays time and buttons*/
  const hourDiv = document.querySelector('.hour');
  const minuteDiv = document.querySelector('.minute');
  const secondDiv = document.querySelector('.second');
  const millisecondDiv = document.querySelector('.millisecond');

  let hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
    timerId;

  let paused = true;  


  //Buttons
  const startPauseButton = document.querySelector('#start-pause');
  const stopButton = document.querySelector('.stop');
  const newTaskButton = document.querySelector('.newTask');

 

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
   * The function starts a timer that increments milliseconds.
   *  When the Msec reach 100, the seconds are incremented and the Msec
   * are reset to 0. Similar checks are mades for minutes and hours.
   */
  function startTimer() {
    paused = false;
    return setInterval(
      () => {
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

  function pauseTimer(timerId) {
    clearInterval(timerId);
    paused = true;

  }

  function stopTimer() {
    clearInterval(timerId);

    millisecondDiv.textContent = "00"
    secondDiv.textContent = "00"
    minuteDiv.textContent = "00"
    hourDiv.textContent = "00"

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    startPauseButton.innerHTML = "Start";
    startPauseButton.style.backgroundColor = "green";

  }



  //Listeners

  startPauseButton.addEventListener('click', (event) => {
    let btn = event.target;
    if (paused) {
      timerId = startTimer();
      btn.textContent = 'Pause';
    } else {
      pauseTimer(timerId);
      btn.textContent = 'Resume';
    }
    btn.classList.toggle('start');
    btn.classList.toggle('pause');

  });

  stopButton.addEventListener('click', stopTimer);


});