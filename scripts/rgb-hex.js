/* eslint-disable no-console */
// window.onload = () => {
//     console.log('scsds');
//     const rgbRawTxt = document.querySelector('#input-text');
//     const hexRawTxt = document.querySelector('#output-text');
//     const encBtn = document.querySelector('#encodeBtn');
//     rgbRawTxt.addEventListener('input', (e) => {
//         hexRawTxt.textContent = e.target.value;
//         console.log('dvfdv');
//     });
//     encBtn.addEventListener('click', () => {
//         hexRawTxt.value = rgbRawTxt.value;
//     });
// };
function RGBToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    if (r.length === 1) r = `0${r}`;
    if (g.length === 1) g = `0${g}`;
    if (b.length === 1) b = `0${b}`;
    return `#${r}${g}${b}`;
}
function RGBTextProcessor(input) {
    // const processedText = input.replace(/[^\d \.]*/g, '');
    const processedText = input.replace(/\D+/g, ',');
    let arr = processedText.split(',');
    arr = arr.filter((element) => {
        if (element === ',') {
            return false;
        }
        if (element.length === 0) {
            return false;
        }
        return true;
    });
    arr.forEach((element, index) => {
        arr[index] = parseInt(element, 10);
    });
    return RGBToHex(arr[0], arr[1], arr[2]);
}
function hexToRGB(input) {
    let r = 0;
    let g = 0;
    let b = 0;
    // 3 digits
    if (input.length == 4) {
        r = `0x${input[1]}${input[1]}`;
        g = `0x${input[2]}${input[2]}`;
        b = `0x${input[3]}${input[3]}`;
        // 6 digits
    } else if (input.length == 7) {
        r = `0x${input[1]}${input[2]}`;
        g = `0x${input[3]}${input[4]}`;
        b = `0x${input[5]}${input[6]}`;
    }
    return `rgb(${+r},${+g},${+b})`;
}
window.onload = () => {
    const rgbRawTxt = document.querySelector('#input-text');
    const hexRawTxt = document.querySelector('#output-text');
    const colorBox = document.querySelector('.color-box');
    rgbRawTxt.addEventListener('input', (e) => {
        const hexVal = RGBTextProcessor(e.target.value);
        if (hexVal !== hexRawTxt.textContent) {
            hexRawTxt.value = hexVal;
            colorBox.style.backgroundColor = hexVal;
            colorBox.style.display = 'flex';
        }
    });
    hexRawTxt.addEventListener('input', (e) => {
        const rgbVal = hexToRGB(e.target.value);
        if (rgbVal !== rgbRawTxt.textContent) {
            rgbRawTxt.value = rgbVal;
            colorBox.style.backgroundColor = rgbVal;
            colorBox.style.display = 'flex';
        }
    });
};
// window.addEventListener('load', loadFunc);
