import View from '../core/view';
import state from '../state/state';
import artState from '../state/artState';
import picState from '../state/picState';
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
    if (state.state.category === 'artists') {
      this.data = artState.state[Number(state.state.questions) - 1];
    } else {
      this.data = picState.state[Number(state.state.questions) - 1];
    }
    const scoreNode = document.querySelector('#score');
    scoreNode.innerHTML = this.data.total;
    console.log(this.data);
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
  <div id='home-route' class='score-btn'>Home</div>
  <div id='cat-route' class='score-btn'>Next Quiz</div>
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
