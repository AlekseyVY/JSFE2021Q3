import View from '../core/view';
import state from '../state/state';
/**
 * View Class for Welcome page;
 * @param {object} dto - data transfer object;
 */
class WelcomeScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

const welcome = new WelcomeScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <img class='logo' src='./assets/splash.webp' alt='logo'>
  <div class='button-wrapper'>
  <button id='category-route-btn' class='waves-effect waves-light btn-large'>New Game</button>
  <button id='profile-route-btn' class='waves-effect waves-light btn-large'>Profile</button>
  <button id='settings-route-btn' class='waves-effect waves-light btn-large'>Settings</button>
  </div>
  `,
  listeners: [
    {
      id: 'settings-route-btn', type: 'click', dispatch: { name: 'route', value: 'settings' }, state,
    },
    {
      id: 'category-route-btn', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
    {
      id: 'profile-route-btn', type: 'click', dispatch: { name: 'route', value: 'profile' }, state,
    },
  ],
});

export default welcome;
