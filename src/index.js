import items from './menu.json';
import template from './templates.hbs';
import './styles.css';

const dish = document.querySelector('.js-menu');

buildDish(items);

function buildDish(items) {
  const markup = items.map(post => template(post)).join('');
  dish.insertAdjacentHTML('beforeend', markup);
}

const themeClick = document.querySelector('.js-switch-input');
const body = document.querySelector('body');
themeClick.addEventListener('change', handleChange);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function handleChange(event) {
  if (!themeClick.checked) {
    themeClick.checked = false;
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  } else {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  }
}

function color() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    themeClick.checked = true;
  }
}
color();
