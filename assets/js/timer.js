const timerTickIntervalMs = 10;
let timerMilliseconds = 0;
let timerSavedMilliseconds = 0;
let timerId = null;
let timerOnTick = null;

function timerTick() {
    timerMilliseconds += timerTickIntervalMs;
    if (timerOnTick != null) {
        timerOnTick(timerMilliseconds);
    }
}

function timerStart () {
    clearInterval(timerId);
    timerId = setInterval(timerTick, timerTickIntervalMs);
    console.log('started', timerId);
}

function timerStop() {
    clearInterval(timerId);
    timerId = null;
    console.log('stoped', timerId);
}

function isTimerStarted() {
    return timerId != null;
}

function timerClear() {
    timerMilliseconds = 0;
}

function timerLastLap() {
    let lastLapMs = timerMilliseconds - timerSavedMilliseconds;
    timerSavedMilliseconds = timerMilliseconds;

    return lastLapMs;
}

function setOnTick(onTick) {
    timerOnTick = onTick;
}

