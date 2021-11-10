import View from '../core/view';
import state from '../state/state';
import JsonWorker from '../data/worker';
/**
 * Game class;
 * @module Game
 */
class GameScreen extends View {
  /**
 * @param {object} dto - data transfer object;
 */
  constructor(dto) {
    super(dto);
    this.dto = dto;
    this.data = dto.data;
    this.category = null;
    this.pageData = null;
    this.state = null;
  }

  /**
  * overriden parent method fot handling additional rendering game logic
  * @method render
  */
  render() {
    super.render();
    this.category = this.getCategory();
    this.pageData = this.category.data[state.state.questNum];
    const node = document.querySelector('.main-image');
    node.src = `./assets/game/full/${this.pageData.imageNum}full.webp`;
  }

  /**
   * @method getCategory
   * @returns {Object} category array that contains all questions sets for given category
   */
  getCategory() {
    this.state = state.state;
    return this.state.category === 'pictures' ? this.state.picturesObj[this.state.questions - 1] : this.state.artistsObj[this.state.questions - 1];
  }
}

const work = new JsonWorker();

const game = new GameScreen({
  worker: work,
  selector: '#root',
  tag: 'main',
  data: state.data,
  class: 'container',
  html: `
  <div class='button-wrapper'>
  <button id='home-route-btn' class='mdc-button mdc-button--raised answer-btn'>Back</button>
  </div>
  <img class='main-image' src=''>
  <div class='answers-wrapper'>
  <button class='mdc-button mdc-button--raised answer-btn'>1</button>
  <button class='mdc-button mdc-button--raised answer-btn'>2</button>
  <button class='mdc-button mdc-button--raised answer-btn'>3</button>
  <button class='mdc-button mdc-button--raised answer-btn'>4</button>
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
  ],
});

export default game;
