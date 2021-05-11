window.onload = () => {
    const inputURI = document.querySelector('#input-text');
    const outputBox = document.querySelector('#output-text');
    const encBtn = document.querySelector('#encodeBtn');
    const decBtn = document.querySelector('#decodeBtn');
    encBtn.addEventListener('click', () => {
        outputBox.value = encodeURIComponent(inputURI.value);
    });
    decBtn.addEventListener('click', () => {
        outputBox.value = decodeURIComponent(inputURI.value);
    });
};
