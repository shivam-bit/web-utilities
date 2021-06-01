/* eslint-disable no-console */

window.onload = () => {
    const dateTimeInputBox = document.querySelector('#datetime');
    const timestampInput = document.querySelector('#timestamp');
    dateTimeInputBox.addEventListener('input', (e) => {
        const dateTimeInput = Date.parse(e.target.value);
        timestampInput.value = dateTimeInput / 1000;
    });
    timestampInput.addEventListener('input', (e) => {
        const DateObj = new Date(e.target.value * 1000);
        dateTimeInputBox.value = DateObj.toISOString().replace('Z', '');
    });
}