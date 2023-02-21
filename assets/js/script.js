document.addEventListener("DOMContentLoaded", () => {
  /**Area displays time*/
  const hourDiv = document.querySelector('.hour');
  const minuteDiv = document.querySelector('.minute');
  const secondDiv = document.querySelector('.second');
  const millisecondDiv = document.querySelector('.millisecond');
  const roundsDiv = document.querySelector('#rounds');
  let roundClickCounter = 0;

  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;

  //Control buttons area
  const startPauseButton = document.querySelector('#start-pause');
  const resetButton = document.querySelector('.reset');
  const newRoundButton = document.querySelector('.newRoundButton');
  const aboutTimerButton = document.getElementById('aboutTimerButton');

  /**
   * The function takes a @param {number} value as input and @returns a string 
   * that represents the same number with two digits. 
   */
  function format2Digits(value) {
    if (value < 10) {
      return '0' + value.toString();
    }
    return value;
  }

  /**
   * The function takes a time duration in milliseconds as input and displays 
   * it in hours, minutes, seconds, and milliseconds in divs. 
   * @param {number} milliseconds - time duration in milliseconds
   */
  function displayTime(milliseconds) {

    let tailMs = milliseconds;
    let hours = Math.floor(milliseconds / msInHour);
    tailMs = tailMs - msInHour * hours;

    let minutes = Math.floor(tailMs / msInMinute);
    tailMs = tailMs - msInMinute * minutes;

    let seconds = Math.floor(tailMs / msInSecond);
    tailMs = Math.floor((tailMs - msInSecond * seconds) / 10);

    hourDiv.innerText = format2Digits(hours);
    minuteDiv.innerText = format2Digits(minutes);
    secondDiv.innerText = format2Digits(seconds);
    millisecondDiv.innerText = format2Digits(tailMs);
  }

  /**
   * This function takes in 
   * @param {number} number of milliseconds and displays it in hours, minutes, seconds, 
   * and milliseconds format. It then creates a new round area with a round name and the formatted time, 
   * and prepends it to a div called roundsDiv.
   */
  function displayLap(milliseconds) {

    let tailMs = milliseconds;
    let hours = Math.floor(milliseconds / msInHour);
    tailMs = tailMs - msInHour * hours;

    let minutes = Math.floor(tailMs / msInMinute);
    tailMs = tailMs - msInMinute * minutes;

    let seconds = Math.floor(tailMs / msInSecond);
    tailMs = Math.floor((tailMs - msInSecond * seconds) / 10);
    let newRound = document.createElement('div');
    newRound.classList.add('roundArea');
    roundsDiv.prepend(newRound);
    let roundName = document.createElement('div');
    newRound.append(roundName);
    roundName.classList.add('newRoundName');
    roundName.innerText = 'Round';
    let roundNumber = document.createElement('div');
    newRound.append(roundNumber);
    roundNumber.classList.add('roundNumber');
    roundNumber.innerHTML = roundClickCounter;

    let roundTime = document.createElement('div');
    newRound.append(roundTime);
    roundTime.classList.add('newRoundTime');
    roundTime.innerText = `${hours} : ${minutes} : ${seconds} : ${tailMs}`;
  }

  setOnTick(displayTime);

  /**
   * Function remove all child element. Takes
   * @param {parent} parent 
   */
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  /**
   * Function show and hide element 
   */
  function ShowAndHideButton() {
    const aboutTimerSection = document.getElementById('textToShow');
    if (aboutTimerSection.classList.contains('hide')) {
      aboutTimerSection.classList.remove('hide');
    } else {
      aboutTimerSection.classList.add('hide');
    }
  }

  //Listeners

  // Listener on Start/Pause button by click event. Check is timer start and change button behavior depend on it state
  startPauseButton.addEventListener('click', (event) => {
    let btn = event.target;

    if (isTimerStarted()) {
      btn.textContent = 'Start';
      btn.classList.add('start');
      btn.classList.remove('pause');
      timerStop();
      newRoundButton.classList.add('noActive');
      newRoundButton.classList.remove('newRoundButton');

    } else {
      btn.textContent = 'Pause';
      btn.classList.add('pause');
      btn.classList.remove('start');
      timerStart();
      newRoundButton.classList.add('newRoundButton');
      newRoundButton.classList.remove('noActive');
    }
  });

  // Listener on Reset button. Stops timer, reset everything on 0 and remove new rounds by click event from HTML if they were created
  resetButton.addEventListener('click', (event) => {

    timerStop();
    timerClear();

    millisecondDiv.textContent = "00";
    secondDiv.textContent = "00";
    minuteDiv.textContent = "00";
    hourDiv.textContent = "00";

    startPauseButton.classList.remove("pause");
    startPauseButton.classList.add("start");
    startPauseButton.innerText = "Start";

    let parentElement = document.querySelector('#rounds');
    removeAllChildNodes(parentElement);

    roundClickCounter = 0;

    if (isTimerStarted()) {

      newRoundButton.classList.add('newRoundButton');
      newRoundButton.classList.remove('noActive');

    } else {
      newRoundButton.classList.add('noActive');
      newRoundButton.classList.remove('newRoundButton');
    }

  });
  
  // Listener on Round button, creats new round elements in HTML by click event
  newRoundButton.addEventListener('click', (event) => {

    if (!isTimerStarted()) {
      return;
    }
    roundClickCounter++;

    let lastLapMs = timerLastLap();
    displayLap(lastLapMs);
  });
  
  //Listener on How to use button. Show and hide element by click event 
  aboutTimerButton.addEventListener('click', (event) => {
    ShowAndHideButton();
  });

  //Listeners on keyboard events. Repet behavior of click events: Start set on Spase, Round on Shift and Reset on R
  addEventListener('keydown', (event) => {
  
    let btn = document.getElementById('start-pause');

    if (event.key === 'r') {
      timerStop();
      timerClear();
  
      millisecondDiv.textContent = "00";
      secondDiv.textContent = "00";
      minuteDiv.textContent = "00";
      hourDiv.textContent = "00";
  
      startPauseButton.classList.remove("pause");
      startPauseButton.classList.add("start");
      startPauseButton.innerText = "Start";
  
      let parentElement = document.querySelector('#rounds');
      removeAllChildNodes(parentElement);
  
      roundClickCounter = 0;
  
      if (isTimerStarted()) {
          newRoundButton.classList.add('newRoundButton');
          newRoundButton.classList.remove('noActive');
      } else {
          newRoundButton.classList.add('noActive');
          newRoundButton.classList.remove('newRoundButton');
      }

      if (event.key === 'Shift') {
        if (!isTimerStarted()) {
          return;
        }
        roundClickCounter++;
    
        let lastLapMs = timerLastLap();
        displayLap(lastLapMs);
      }
  
    }
  
    if (event.code === 'Space') {
      window.event.preventDefault();
      if (isTimerStarted()) {
        btn.textContent = 'Start';
        btn.classList.add('start');
        btn.classList.remove('pause');
        timerStop();
        newRoundButton.classList.add('noActive');
        newRoundButton.classList.remove('newRoundButton');
      } else {
        btn.textContent = 'Pause';
        btn.classList.add('pause');
        btn.classList.remove('start');
        timerStart();
        newRoundButton.classList.add('newRoundButton');
        newRoundButton.classList.remove('noActive');
      }
    }

    if (event.key === 'Shift') {
      if (!isTimerStarted()) {
        return;
      }
      roundClickCounter++;
  
      let lastLapMs = timerLastLap();
      displayLap(lastLapMs);
    }

  });

});