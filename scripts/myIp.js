/* eslint-disable no-console */
window.onload = () => {
    const inputBox = document.querySelector('.input-text');
    console.log('linked');
    fetch('https://api.ipify.org/?format=json')
        .then((response) => response.json())
        .then((response) => {
            // inputBox.textContent = "";
            inputBox.textContent = response.ip;
        });
};
