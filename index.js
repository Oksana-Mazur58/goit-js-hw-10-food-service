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

themeSwitchRef.addEventListener('change', darkThemeTurnOn);

const changeClass = (oldClass, newClass) => {
    bodyRef.classList.remove(oldClass)
    bodyRef.classList.add(newClass)
};

const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
}

function darkThemeTurnOn(e) {
    if (e.target.checked) {
        changeClass(LIGHT, DARK)
        updateLocalStorage("Theme", DARK)
        
        
    } else {
        changeClass(DARK, LIGHT)
        updateLocalStorage('Theme', LIGHT)
      
    }
}


function getLocalStorageKey() {
    const saveValue = localStorage.getItem('Theme')
    
    bodyRef.classList.add(saveValue)
    updateLocalStorage("Theme", saveValue)
    
    const flag = saveValue === DARK;
    themeSwitchRef.checked = flag;    
    
}
getLocalStorageKey()