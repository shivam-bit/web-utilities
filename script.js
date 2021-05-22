/* eslint-disable no-console */
const loadFunc = () => {
    const toggleBtn = document.querySelector('.fa-bars');
    const crossBtn = document.querySelector('.fa-times');
    const menu = document.querySelector('.menu');
    const copyTxtBtns = document.querySelectorAll('.fa-copy');
    const deleteTxtBtns = document.querySelectorAll('.fa-trash');
    toggleBtn.addEventListener('click', () => {
        menu.style.display = 'block';
        toggleBtn.style.display = 'none';
        crossBtn.style.display = 'flex';
    });
    crossBtn.addEventListener('click', () => {
        menu.style.display = 'none';
        toggleBtn.style.display = 'flex';
        crossBtn.style.display = 'none';
    });
    copyTxtBtns.forEach((copyTxt) => {
        copyTxt.addEventListener('click', () => {
            const copiedData = copyTxt.parentNode.parentNode.nextSibling.nextSibling;
            copiedData.select();
            document.execCommand('copy');
        });
    });
    deleteTxtBtns.forEach((deleteTxt) => {
        deleteTxt.addEventListener('click', () => {
            deleteTxt.parentNode.parentNode.nextSibling.nextSibling.value = '';
        });
    });
};

window.addEventListener('load',loadFunc)
