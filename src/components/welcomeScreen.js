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
  <img id='settings-route-btn' class='settings_icon' src='./assets/settings.png' alt='settings'>
  <img class='logo' src='./assets/logo.svg' alt='Game logo'>
  <div class='category_welcome-wrapper'>
  <div id='category-pictures' class='category_welcome'>Pictures</div>
  <div id='category-artists' class='category_welcome'>Artists</div>
  </div>
  <div class='footer'>
  <a href='https://rs.school/' target="_blank">
  <img class='rs_logo' src='./assets/rs_logo.png' alt='RSS logo'>
  </a>
  <a class='my_logo' href='https://github.com/AlekseyVY' target="_blank">AlekseyVY</a>
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
  ],
});

export default welcome;
