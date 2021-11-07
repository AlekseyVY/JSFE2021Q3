import WelcomeScreen from './components/welcomeScreen';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

import('./main.scss');
import('normalize.css');

const welcome = new WelcomeScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <img class='logo' src='./assets/splash.webp' alt='logo'>
  <div class='button-wrapper'>
  <button class='waves-effect waves-light btn-large'>New Game</button>
  <button class='waves-effect waves-light btn-large'>Profile</button>
  <button class='waves-effect waves-light btn-large'>Settings</button>
  </div>
  `,
});

welcome.render();
