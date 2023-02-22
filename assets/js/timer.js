// Variables for timer
const timerTickIntervalMs = 10;
let timerMilliseconds = 0;
let timerSavedMilliseconds = 0;
let timerId = null;
let timerOnTick = null;

/**
 * The function increments the timer by the timerTickIntervalMs value and calls 
 * a callback function (timerOnTick) with the updated timer value as a parameter.
 */
function timerTick() {
    timerMilliseconds += timerTickIntervalMs;
    if (timerOnTick != null) {
        timerOnTick(timerMilliseconds);
    }
}

/**
 * Function clears any existing timer and starts a new one with the timerTick 
 * function as a callback and interval timerTickIntervalMs.
 */
function timerStart() {
    clearInterval(timerId);
    timerId = setInterval(timerTick, timerTickIntervalMs);
}

/**
 * Function stops the timer and clears the timer interval.
 */
function timerStop() {
    clearInterval(timerId);
    timerId = null;
}

/**
 * Function checks if the timer is currently running and @returns a boolean value
 */
function isTimerStarted() {
    return timerId != null;
}

/**
 * Function resets the timer to zero Ms
 */
function timerClear() {
    timerMilliseconds = 0;
    timerSavedMilliseconds = 0;
}

/**
 * Function calculates the elapsed time between the last two laps of the timer 
 * (i.e., the time between the last two calls to this function). @returns calculation result
 */
function timerLastLap() {
    let lastLapMs = timerMilliseconds - timerSavedMilliseconds;
    timerSavedMilliseconds = timerMilliseconds;

    return lastLapMs;
}

/**
 * Function sets a callback function @param {*} onTick to be called on every tick of the timer.
 */
function setOnTick(onTick) {
    timerOnTick = onTick;
}


