/* eslint-disable no-console */
window.onload = () => {
    const toggleBtn = document.querySelector('.fa-bars');
    const menu = document.querySelector('.menu');
    toggleBtn.addEventListener('click', () => {
        if (menu.style.display !== 'none') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
};
