window.onload = () => {
    const inputBox = document.querySelector('#input-text');
    const outputBox = document.querySelector('#output-text');
    const encBtn = document.querySelector('#encodeBtn');
    encBtn.addEventListener('click', () => {
        // eslint-disable-next-line no-undef
        outputBox.value = CryptoJS.SHA512(inputBox.value);
    });
};
