/* eslint-disable no-console */
let startTime = new Date();
const startTimeForLapses = null;
let intervalId = null;
let pausedAt = null;
const arr = [];

const milliSecondsExtractor = (seconds) => parseInt(100 * (seconds - Math.floor(seconds)), 10);
const formatter = (num) => (num < 10 ? `0${num}` : num.toString());
const dateFormatter = (timeObj) => {
    const mins = formatter(timeObj.getMinutes());
    const secs = formatter(timeObj.getSeconds());
    const milliSecs = formatter(Math.floor(timeObj.getMilliseconds() / 10));
    return `${mins}:${secs}:${milliSecs}`;
};
const currentLeapTimePrint = () => arr.forEach((ele) => console.log(dateFormatter(ele.currentLapTime)));
const cummalativeTimePrint = () => arr.forEach((ele) => console.log(dateFormatter(ele.cummalativeTime)));
const checkPauseFunction = () => {
    const currentObj = new Date();
    if (pausedAt) {
        currentObj.setMinutes(currentObj.getMinutes() - (pausedAt.getMinutes() - startTime.getMinutes()));
        currentObj.setSeconds(currentObj.getSeconds() - (pausedAt.getSeconds() - startTime.getSeconds()));
        currentObj.setMilliseconds(
            currentObj.getMilliseconds() - (pausedAt.getMilliseconds() - startTime.getMilliseconds()),
        );
        return currentObj;
    }
    return false;
};

const timeExtracter = (value) => {
    const milliSeconds = formatter(milliSecondsExtractor(value % 60));
    const seconds = formatter(parseInt(value % 60, 10));
    const mins = formatter(Math.floor(value / 60));
    // console.log(`Min: ${mins} Seconds: ${seconds} milliseconds: ${milliSeconds}`);
    return { mins, seconds, milliSeconds };
};

const updater = (milliSecondsBox, secondsBox, minutesBox) => {
    let currentTime = new Date();
    currentTime = currentTime.getTime();
    const diffVal = Math.abs((currentTime - startTime.getTime()) / 1000);
    const { mins, seconds, milliSeconds } = timeExtracter(diffVal);
    // console.log(`Min: ${mins} Seconds: ${seconds} milliseconds: ${milliSeconds}`);
    milliSecondsBox.textContent = milliSeconds;
    secondsBox.textContent = seconds;
    minutesBox.textContent = mins;
};

const lapsAdder = () => {
    const currentLapTime = new Date();
    const cummalativeTime = new Date();
    const tempCurrentTimeObj = new Date();
    cummalativeTime.setMinutes(tempCurrentTimeObj.getMinutes() - startTime.getMinutes());
    cummalativeTime.setSeconds(tempCurrentTimeObj.getSeconds() - startTime.getSeconds());
    cummalativeTime.setMilliseconds(tempCurrentTimeObj.getMilliseconds() - startTime.getMilliseconds());
    if (arr.length > 0) {
        const lastLapObj = arr[arr.length - 1];
        currentLapTime.setMinutes(cummalativeTime.getMinutes() - lastLapObj.cummalativeTime.getMinutes());
        currentLapTime.setSeconds(cummalativeTime.getSeconds() - lastLapObj.cummalativeTime.getSeconds());
        currentLapTime.setMilliseconds(
            cummalativeTime.getMilliseconds() - lastLapObj.cummalativeTime.getMilliseconds(),
        );
    } else {
        currentLapTime.setTime(cummalativeTime.getTime());
    }
    const lapObj = {
        cummalativeTime,
        currentLapTime,
    };
    arr.push(lapObj);
};

const lapsDocumentUpdater = (outputBox) => {
    const { currentLapTime, cummalativeTime } = arr[arr.length - 1];
    const lapItem = document.createElement('div');
    lapItem.classList.add('lap-item');
    const lapNo = document.createElement('div');
    lapNo.classList.add('lap-num');
    lapNo.innerText = arr.length;
    const lapTime = document.createElement('div');
    lapTime.classList.add('lap-time');
    lapTime.innerText = dateFormatter(currentLapTime);
    const totalTime = document.createElement('div');
    totalTime.classList.add('cumulative-time');
    totalTime.innerText = dateFormatter(cummalativeTime);
    lapItem.append(lapNo, lapTime, totalTime);
    outputBox.appendChild(lapItem);
};

window.onload = () => {
    const startBtn = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');
    const pauseBtn = document.querySelector('.pause');
    const lapsBtn = document.querySelector('.laps');
    const milliSecondsBox = document.querySelector('.milliSeconds');
    const outputBox = document.querySelector('.output-text');
    const secondsBox = document.querySelector('.seconds');
    const minutesBox = document.querySelector('.minutes');
    const outputArea = document.querySelector('.output-area');
    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        stopBtn.style.display = 'none';
        pauseBtn.style.display = 'flex';
        lapsBtn.style.display = 'flex';
        clearInterval(intervalId);
        const isPaused = checkPauseFunction();
        if (isPaused) {
            startTime = isPaused;
        } else {
            startTime = new Date();
        }
        // console.log(startTime);
        intervalId = setInterval(() => updater(milliSecondsBox, secondsBox, minutesBox), 100);
    });
    stopBtn.addEventListener('click', () => {
        const lapsItems = document.querySelectorAll('.lap-item');
        lapsItems.forEach((ele) => ele.remove());
        outputArea.style.display = 'none';
        stopBtn.style.display = 'none';
        clearInterval(intervalId);
        arr.length = 0;
        pausedAt = null;
        milliSecondsBox.textContent = '00';
        secondsBox.textContent = '00';
        minutesBox.textContent = '00';
    });
    pauseBtn.addEventListener('click', () => {
        lapsBtn.style.display = 'none';
        pauseBtn.style.display = 'none';
        stopBtn.style.display = 'flex';
        startBtn.style.display = 'flex';
        clearInterval(intervalId);
        pausedAt = new Date();
    });
    lapsBtn.addEventListener('click', () => {
        lapsAdder();
        lapsDocumentUpdater(outputBox);
        outputArea.style.display = 'flex';
    });
};
