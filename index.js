import listMenuTpl from './template.hbs';
import menuList from './menu.json';


const galleryMenuRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const themeSwitchRef = document.getElementById('theme-switch-toggle');


const greateMenu = listMenuTpl(menuList);
galleryMenuRef.insertAdjacentHTML('beforeend', greateMenu);



const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;


bodyRef.classList.add(LIGHT)



themeSwitchRef.addEventListener('change', darkThemeTurnOn);
const valueThem = (localStorage.getItem('Theme'));
const changeClass = (oldClass, newClass) => {
    bodyRef.classList.remove(oldClass)
    bodyRef.classList.add(newClass)  
}


function darkThemeTurnOn() {
    if (bodyRef.classList.contains(LIGHT)) {
        changeClass(LIGHT, DARK)
        localStorage.setItem('Theme', DARK)
        themeSwitchRef.setAttribute('checked', true)
        
    } else {
        changeClass(DARK, LIGHT)
        localStorage.setItem('Theme', LIGHT)
       
       
    }
}
// if (valueThem === Theme.DARK) {
//     onDarkThem();
// };
getLocalStorageKey()
function getLocalStorageKey() {
    const saveValue = localStorage.getItem('Theme')
    if (saveValue) {
        bodyRef.classList.add(saveValue)
        
    }
}
