import listMenuTpl from './template.hbs';
import menuList from './menu.json';


const galleryMenuRef = document.querySelector('.js-menu')
const greateMenu = creatGelleryMenu(menuList);
galleryMenuRef.insertAdjacentHTML('beforeend', greateMenu);
