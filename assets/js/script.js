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
  const newRoundButton = document.querySelector('.newRoundButton');

 

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

  /**
   * Function pauses a timer. Takes one argument @param {*} timerId which is the ID of the timer that is to be paused.
   */
  function pauseTimer(timerId) {
    clearInterval(timerId);
    paused = true;
    console.log("paused at:", hours, minutes, seconds);

  }

  /**
   * Function stops a timer, resetting the timer to its starting value. Function does not take any arguments. 
   */
  function stopTimer() {
    clearInterval(timerId);

    paused = true;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    
    return null;
  }
  

  function addRound() {
    
    console.log("paused at:", hours, minutes, seconds);

    let timeTrecker = document.getElementsByClassName('timeTracker')[0];
    let newRoundArea = document.createElement('div');
    newRoundArea.classList.add('roundArea');
    timeTrecker.append(newRoundArea);
    let roundName = document.createElement('div');
    newRoundArea.append(roundName);
    roundName.classList.add('newRoundName');
    roundName.innerText = 'Round'
    let roundTime = document.createElement('div');
    newRoundArea.append(roundTime);
    roundTime.classList.add('newRoundTime');
    roundTime.innerText = ` ${hours}:${minutes}:${seconds}:${milliseconds}`;
    let timeTreckerArea = document.getElementsByClassName('timeTracker');
    timeTreckerArea.style.width = 

    console.log(timeTrecker);

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

  stopButton.addEventListener('click', (event) => {
    stopTimer(timerId);

    millisecondDiv.textContent = "00"
    secondDiv.textContent = "00"
    minuteDiv.textContent = "00"
    hourDiv.textContent = "00"

    startPauseButton.classList.remove("pause");
    startPauseButton.classList.add("start");
    startPauseButton.innerText = "Start";

  });

  newRoundButton.addEventListener ('click', (event) => {
    clearInterval(timerId);
    addRound();

    startPauseButton.classList.remove("pause");
    startPauseButton.classList.add("start");
    startPauseButton.innerText = "Start";

    console.log(startPauseButton.value);

  })


});