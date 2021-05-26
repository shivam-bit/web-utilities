/* eslint-disable no-console */

const closeDropdown = (menuItem, menuItemArr, openDownBtn, dropdownMenu) => {
    dropdownMenu.classList.remove('show');
    menuItem.classList.remove('d-menu-item');
    menuItemArr[0].classList.remove('dropdown-heading');
    openDownBtn.style.transform = 'initial';
    menuItem.style.backgroundColor = 'inherit';
};

const openDropdown = (menuItem, menuItemArr, openDownBtn, dropdownMenu) => {
    dropdownMenu.classList.add('show');
    menuItem.classList.add('d-menu-item');
    menuItemArr[0].classList.add('dropdown-heading');
    openDownBtn.style.transform = 'rotate(0.5turn)';
    menuItem.style.backgroundColor = '#371B9D';
};

const closeAllDropdowns = (dropdowns) => {
    dropdowns.forEach((menuItem) => {
        const menuItemArr = menuItem.children;
        const openDownBtn = menuItemArr[0].lastElementChild;
        const dropdownMenu = menuItemArr[1];
        try {
            closeDropdown(menuItem, menuItemArr, openDownBtn, dropdownMenu);
        } catch (error) {
            // console.log('no dropdowns to close');
        }
    });
};

const loadFunc = () => {
    const toggleBtn = document.querySelector('.fa-bars');
    const crossBtn = document.querySelector('.fa-times');
    const menu = document.querySelector('.menu');
    const copyTxtBtns = document.querySelectorAll('.fa-copy');
    const deleteTxtBtns = document.querySelectorAll('.fa-trash');
    const dropdowns = document.querySelectorAll('.menu-item');
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
    dropdowns.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            const menuItemArr = menuItem.children;
            const openDownBtn = menuItemArr[0].lastElementChild;
            const dropdownMenu = menuItemArr[1];
            const currentDisplay = window.getComputedStyle(dropdownMenu).getPropertyValue('display');
            if (currentDisplay === 'none') {
                closeAllDropdowns(dropdowns);
                openDropdown(menuItem, menuItemArr, openDownBtn, dropdownMenu);
            } else {
                closeDropdown(menuItem, menuItemArr, openDownBtn, dropdownMenu);
            }
        });
    });
};

window.addEventListener('load', loadFunc);
