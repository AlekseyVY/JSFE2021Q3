import WelcomeScreen from './components/welcomeScreen';
import SettingScreen from './components/settings';
import Router from './core/route';
import Store from './core/store';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

import('./main.scss');
import('normalize.css');

const state = new Store({
  route: 'welcome',
});

const welcome = new WelcomeScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <img class='logo' src='./assets/splash.webp' alt='logo'>
  <div class='button-wrapper'>
  <button class='waves-effect waves-light btn-large'>New Game</button>
  <button class='waves-effect waves-light btn-large'>Profile</button>
  <button id='settings-route-btn' class='waves-effect waves-light btn-large'>Settings</button>
  </div>
  `,
  listeners: [
    {
      id: 'settings-route-btn', type: 'click', dispatch: { name: 'route', value: 'settings' }, state,
    },
  ],
});

const settings = new SettingScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <img class='logo' src='./assets/splash.webp' alt='logo'>
  <div class='button-wrapper'>
  <button id='home-route-btn' class='waves-effect waves-light btn-large'>Home</button>
  Settings Page
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    },
  ],
});

const router = new Router({
  routes: {
    welcome,
    settings,
  },
});

state.subscribe((data) => router.listen(data));
router.render('settings');
