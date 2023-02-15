document.addEventListener("DOMContentLoaded", () => {
  /**Area displays time and buttons*/
  const hourDiv = document.querySelector('.hour');
  const minuteDiv = document.querySelector('.minute');
  const secondDiv = document.querySelector('.second');
  const millisecondDiv = document.querySelector('.millisecond');
  
  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour =  msInMinute * 60;

  //Buttons
  const startPauseButton = document.querySelector('#start-pause');
  const stopButton = document.querySelector('.stop');
  const newRoundButton = document.querySelector('.newRoundButton');

  function format2Digits(value){
    if (value < 10) {
      return '0' + value.toString();
    } 
    return value;
  }

  function displayTime(milliseconds) {
    //new function
    let tailMs = milliseconds;
    let hours =  Math.floor(milliseconds/msInHour);
    tailMs = tailMs - msInHour * hours;

    let minutes = Math.floor(tailMs/msInMinute);
    tailMs = tailMs - msInMinute * minutes;
    
    let seconds = Math.floor(tailMs/msInSecond);
    tailMs = Math.floor((tailMs - msInSecond * seconds)/10);
    //new function
    
  
    hourDiv.innerText =  format2Digits(hours);
    minuteDiv.innerText = format2Digits(minutes);
    secondDiv.innerText = format2Digits(seconds);
    millisecondDiv.innerText = format2Digits(tailMs);
  }

  function consoleTime(milliseconds){
    console.log(milliseconds);
  }

  function addRound() {
    // console.log("paused at:", hours, minutes, seconds);

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
    

    // console.log(timeTrecker);

  }

  setOnTick(displayTime);
  //Listeners

  startPauseButton.addEventListener('click', (event) => {
    let btn = event.target;
    
    if (isTimerStarted()) {
      btn.textContent = 'Start';
      btn.classList.add('start');
      btn.classList.remove('pause');
      timerStop();
    }  else {
      btn.textContent = 'Pause';
      btn.classList.add('pause');
      btn.classList.remove('start');
      timerStart();
    }
    
  });

  stopButton.addEventListener('click', (event) => {
    timerStop();
    timerClear();

    millisecondDiv.textContent = "00"
    secondDiv.textContent = "00"
    minuteDiv.textContent = "00"
    hourDiv.textContent = "00"

    startPauseButton.classList.remove("pause");
    startPauseButton.classList.add("start");
    startPauseButton.innerText = "Start";

  });

  newRoundButton.addEventListener ('click', (event) => {
    
    addRound();

    startPauseButton.classList.remove("pause");
    startPauseButton.classList.add("start");
    startPauseButton.innerText = "Start";

  })


});