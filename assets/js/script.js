document.addEventListener("DOMContentLoaded", () => {
  /**Area displays time and buttons*/
  const hourDiv = document.querySelector('.hour');
  const minuteDiv = document.querySelector('.minute');
  const secondDiv = document.querySelector('.second');
  const millisecondDiv = document.querySelector('.millisecond');

  let hours = 0, minutes = 0, seconds = 0, milliseconds = 0, interval;


  //Buttons
  const startButton = document.querySelector('.start');
  const stopButton = document.querySelector('.stop');
  const newTaskButton = document.querySelector('.newTask');

  //Hide buttons

  let pauseButton;

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
   * Create pauseButton, set Start Button in it and update content and style of Start Button
   */
  function updateStartButton() {
    pauseButton = startButton;
    pauseButton.id = 'pause';
    pauseButton.innerHTML = "<p2>Pause</p2>"
    pauseButton.style.backgroundColor = "yellow";
  }
  /**
   * The function starts a timer that increments milliseconds.
   *  When the Msec reach 100, the seconds are incremented and the Msec
   * are reset to 0. Similar checks are mades for minutes and hours.
   */
  function startTimer() {
    
    updateStartButton();
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

  

  startButton.addEventListener('click', () => {
      clearInterval(interval);
      interval = startTimer();
  });
  stopButton.addEventListener('click', () => {
      clearInterval(interval);
      
      hours = 0, minutes = 0, seconds = 0, milliseconds = 0, interval;
      
      millisecondDiv.textContent = "00" 
      secondDiv.textContent = "00" 
      minuteDiv.textContent = "00" 
      hourDiv.textContent = "00" 
  });

 let resumeButton = document.getElementById('pause');
     resumeButton.addEventListener ('click', () => {
     clearInterval(interval);
     resumeButton.innerHTML = "<p2>Resume</p2>"
     resumeButton.style.backgroundColor = "Green";
});



});
