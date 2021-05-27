/* eslint-disable no-console */
let startTime = new Date();
startTime = startTime.getTime();
let intervalId = null;

const milliSecondsExtractor = (seconds) => parseInt(100 * (seconds - Math.floor(seconds)), 10);

const timeExtracter = (value) => {
    // const seconds = value / 10;
    const milliSeconds = milliSecondsExtractor(value % 60);
    const seconds = parseInt(value % 60, 10);
    const mins = Math.floor(value / 60);
    console.log(`Min: ${mins} Seconds: ${seconds} milliseconds: ${milliSeconds}`);
};
window.onload = () => {
    const updater = () => {
        let currentTime = new Date();
        currentTime = currentTime.getTime();
        const diffVal = (currentTime - startTime) / 1000;
        timeExtracter(diffVal);
    };
    const startBtn = document.querySelector('.start');
    const stopBtn = document.querySelector('.stop');
    startBtn.addEventListener('click', () => {
        startTime = new Date();
        intervalId = setInterval(updater, 100);
    });
    stopBtn.addEventListener('click', () => {
        clearInterval(intervalId);
    });
};
