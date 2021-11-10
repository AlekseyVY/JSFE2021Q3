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
  <div class='category-wrapper'>
  <div id='category-pictures' class='category'>Pictures</div>
  <div id='category-artists' class='category'>Artists</div>
  </div>
  <div class='button-wrapper'>
  <button id='profile-route-btn' class='mdc-button mdc-button--raised'>Profile</button>
  <button id='settings-route-btn' class='mdc-button mdc-button--raised'>Settings</button>
  </div>
  `,
  listeners: [
    {
      id: 'settings-route-btn', type: 'click', dispatch: { name: 'route', value: 'settings' }, state,
    },
    {
      id: 'category-pictures', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
    {
      id: 'category-artists', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
    {
      id: 'category-pictures', type: 'click', dispatch: { name: 'category', value: 'pictures' }, state,
    },
    {
      id: 'category-artists', type: 'click', dispatch: { name: 'category', value: 'artists' }, state,
    },
    {
      id: 'profile-route-btn', type: 'click', dispatch: { name: 'route', value: 'profile' }, state,
    },
  ],
});

export default welcome;
