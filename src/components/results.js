import View from '../core/view';
import state from '../state/state';
import artState from '../state/artState';
/**
 * View Class for Profile page;
 * @param {object} dto - data transfer object;
 */
class ResultScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
    this.data = null;
  }

  render() {
    super.render();
    this.data = artState.state[Number(state.state.questions) - 1];
    console.log(this.data);
  }
}

const results = new ResultScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <img class='logo' src='./assets/splash.webp' alt='logo'>
  <div class='button-wrapper'>
  <button id='home-route-btn' class='mdc-button mdc-button--raised'>Home</button>
  Results page
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    },
  ],
});

export default results;
