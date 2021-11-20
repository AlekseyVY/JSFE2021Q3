import router from './helpers/subscribe';

import('./main.scss');
import('normalize.css');

const preload = () => {
  const loader = document.createElement('img');
  loader.src = './assets/loader.gif';
  loader.alt = 'loader animation';
  loader.classList.add('preloader');
  const node = document.querySelector('body');
  node.append(loader);
  setTimeout(() => {
    const remNode = document.querySelector('.preloader');
    remNode.remove();
    router.render('welcome');
  }, 6700);
};

preload();
