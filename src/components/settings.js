import View from '../core/view';
import state from '../core/store';
/**
 * View Class for Settings page;
 * @param {object} dto - data transfer object;
 */
class SettingScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

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

export default settings;
