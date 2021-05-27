/* eslint-disable no-console */
const timestampToHuman = (timestamp) => {
    const HumanDate = new Date(timestamp*1000);
    console.log(HumanDate);
    return HumanDate;
};

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
}

// console.log(timeConverter(0));

// console.log(new Date(1));
// const a = 1;
// const HumanDate = new Date(a);
// console.log(HumanDate);

window.onload = () => {
    const dateTimeInput = document.querySelector('#datetime');
    const timestampInput = document.querySelector('#timestamp');
    dateTimeInput.addEventListener('input', (e) => {
        console.log(e.target.value);
        // timestampToHuman(e.target.value);
    });
    timestampInput.addEventListener('input', (e) => {
        // console.log(e.target.value);
        // console.log(typeof 1622062610);
        const HumanDate = timestampToHuman(e.target.value);
        dateTimeInput.value=HumanDate;
        // console.log(HumanDate);
        // console.log(timestampInput.value);
    });
    // console.log(HumanDate);
    // rgbRawTxt.addEventListener('input', (e) => {
    //     const hexVal = RGBTextProcessor(e.target.value);
    //     if (hexVal !== hexRawTxt.textContent) {
    //         hexRawTxt.value = hexVal;
    //         colorBox.style.backgroundColor = hexVal;
    //         colorBox.style.display = 'flex';
    //     }
    // });
    // hexRawTxt.addEventListener('input', (e) => {
    //     const rgbVal = hexToRGB(e.target.value);
    //     if (rgbVal !== rgbRawTxt.textContent) {
    //         rgbRawTxt.value = rgbVal;
    //         colorBox.style.backgroundColor = rgbVal;
    //         colorBox.style.display = 'flex';
    //     }
    // });
};
// window.addEventListener('load', loadFunc);
