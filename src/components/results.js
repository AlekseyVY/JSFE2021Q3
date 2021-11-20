import View from '../core/view';
import state from '../state/state';
import artState from '../state/artState';
import picState from '../state/picState';
import sound from './sound';
import settingsState from '../state/settingsState';
/**
 * View Class for Results page;
 * @module ResultScreen
 */
class ResultScreen extends View {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    super(dto);
    this.dto = dto;
    this.data = null;
  }

  /**
   * Method for page renders
   * @method render
   */
  render() {
    super.render();
    if (settingsState.state.sound) sound.gameSound();
    if (state.state.category === 'artists') {
      this.data = artState.state[Number(state.state.questions) - 1];
    } else {
      this.data = picState.state[Number(state.state.questions) - 1];
    }
    const scoreNode = document.querySelector('#score');
    scoreNode.innerHTML = this.data.total;
  }
}

const results = new ResultScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <div class='results-wrapper'>
  <img class='win-img' src='./assets/win.png' alt='win'>
  <p class='congrats-text'>Congratulations!</p>
  <p><span id='score'>0</span>/10</p>
  <div class='button-wrapper'>
  <div id='home-route' class='score-btn glow-on-hover'>Home</div>
  <div id='cat-route' class='score-btn glow-on-hover'>Next Quiz</div>
  </div>
  </div>
  `,
  listeners: [
    {
      id: 'home-route', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    },
    {
      id: 'cat-route', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
  ],
});

export default results;
