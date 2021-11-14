import View from '../core/view';
import state from '../state/state';
import JsonWorker from '../data/worker';
import artState from '../state/artState';
import picState from '../state/picState';
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
    this.buttons = null;
    this.answers = [];
    this.questArr = null;
  }

  /**
  * overriden parent method fot handling additional rendering game logic
  * @method render
  */
  render() {
    super.render();
    this.category = this.getCategory();
    this.pageData = this.category.data[state.state.questNum];
    if (!this.questArr && state.state.category === 'artists') {
      this.questArr = artState.state[this.category.id];
      this.questArr.total = 0;
    } else if (!this.questArr && state.state.category === 'pictures') {
      this.questArr = picState.state[this.category.id];
      this.questArr.total = 0;
    }
    if (this.questArr) this.questArr.played = true;
    const node = document.querySelector('.main-image');
    node.src = `./assets/game/img/${this.pageData.imageNum}.webp`;
    this.setAnswer();
    this.answers = [];

    const tmp = document.querySelector('#home-route-btn');
    tmp.addEventListener('click', () => {
      this.questArr = null;
    });
  }

  /**
   * @method getCategory
   * @returns {Object} category array that contains all questions sets for given category
   */
  getCategory() {
    this.state = state.state;
    return this.state.category === 'pictures' ? this.state.picturesObj[this.state.questions - 1] : this.state.artistsObj[this.state.questions - 1];
  }

  setAnswer() {
    this.buttons = Array.from(document.getElementsByClassName('answer-btn'));
    let count = 3;
    const rightAnswer = this.pageData.author;
    this.answers.push({ right: true, answer: rightAnswer });
    while (count !== 0) {
      const tmp = this.state.data[Math.floor(Math.random() * this.state.data.length)].author;
      if (tmp !== rightAnswer) {
        count -= 1;
        this.answers.push({ right: false, answer: tmp });
      }
    }
    this.answers = this.shuffleAnswers();
    this.buttons.forEach((btn, idx) => {
      // eslint-disable-next-line no-param-reassign
      btn.textContent = this.answers[idx].answer;
      if (this.answers[idx].right) {
        btn.addEventListener('click', () => {
          this.calcAnswers(true, state.state.questNum);
          if (state.state.questNum === 9) {
            state.dispatch({ name: 'questNum', value: 0 });

            if (state.state.category === 'artists') {
              artState.dispatch({ name: Number(state.state.questions) - 1, value: this.questArr });
            } else {
              picState.dispatch({ name: Number(state.state.questions) - 1, value: this.questArr });
            }
            this.questArr = null;
            state.dispatch({ name: 'route', value: 'results' });
          } else {
            state.dispatch({ name: 'questNum', value: state.state.questNum < 9 ? state.state.questNum += 1 : state.state.questNum });
          }
        });
      } else {
        btn.addEventListener('click', () => {
          this.calcAnswers(false, state.state.questNum);
          if (state.state.questNum === 9) {
            state.dispatch({ name: 'questNum', value: 0 });

            if (state.state.category === 'artists') {
              artState.dispatch({ name: Number(state.state.questions) - 1, value: this.questArr });
            } else {
              picState.dispatch({ name: Number(state.state.questions) - 1, value: this.questArr });
            }
            this.questArr = null;
            state.dispatch({ name: 'route', value: 'results' });
          } else {
            state.dispatch({ name: 'questNum', value: state.state.questNum < 9 ? state.state.questNum += 1 : state.state.questNum });
          }
        });
      }
    });
    const node = document.querySelector('#home-route-btn');
    node.addEventListener('click', () => {
      state.dispatch({ name: 'questNum', value: 0 });
    });
  }

  calcAnswers(data, num) {
    this.questArr[num] = data;
    if (data) this.questArr.total += 1;
  }

  shuffleAnswers() {
    const newArr = this.answers.slice();
    for (let i = newArr.length - 1; i > 0; i -= 1) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
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
  <div class='game-header'>
  <img id='home-route-btn' class='close-game' src='./assets/close.png' alt='close button'>
  </div>
  <div class='question-game'>Who is the author of this picture?</div>
  <img class='main-image' src=''>
  <div class='answers-wrapper'>
    <button class='answer-btn'>1</button>
    <button class='answer-btn'>2</button>
    <button class='answer-btn'>3</button>
    <button class='answer-btn'>4</button>
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
  ],
});

export default game;
