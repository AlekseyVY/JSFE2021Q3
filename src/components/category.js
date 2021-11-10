import View from '../core/view';
import ApiCall from '../helpers/apiCall';
import state from '../state/state';
/**
 * View Class for Category page;
 * @param {object} dto - data transfer object;
 */
class CategoryScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

// Temporary solution
const api = new ApiCall('./assets/data/images.json');
api.getData().then(() => {});
// End of Temporary solution

const category = new CategoryScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <img class='logo' src='./assets/splash.webp' alt='logo'>
  <div class='button-wrapper'>
  <button id='home-route-btn' class='mdc-button mdc-button--raised'>Home</button>
  Category Page
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    },
  ],
});

export default category;
