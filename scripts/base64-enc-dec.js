window.onload = () => {
    const inputURI = document.querySelector('#input-text');
    const outputBox = document.querySelector('#output-text');
    const encBtn = document.querySelector('#encodeBtn');
    const decBtn = document.querySelector('#decodeBtn');
    encBtn.addEventListener('click', () => {
        outputBox.value = btoa(inputURI.value);
    });
    decBtn.addEventListener('click', () => {
        outputBox.value = atob(inputURI.value);
    });
};
