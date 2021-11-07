import View from '../core/view';
import state from '../state/state';
/**
 * View Class for Profile page;
 * @param {object} dto - data transfer object;
 */
class ProfileScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

const profile = new ProfileScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <img class='logo' src='./assets/splash.webp' alt='logo'>
  <div class='button-wrapper'>
  <button id='home-route-btn' class='waves-effect waves-light btn-large'>Home</button>
  Profile Page
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    },
  ],
});

export default profile;
