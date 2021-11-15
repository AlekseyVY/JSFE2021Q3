import View from '../core/view';
import state from '../state/state';
import JsonWorker from '../data/worker';
import artState from '../state/artState';
import picState from '../state/picState';
import settingsState from '../state/settingsState';
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
    this.rootNode = document.querySelector('#root');
    this.settings = null;
  }

  /**
  * overriden parent method for handling additional rendering game logic
  * @method render
  */
  render() {
    super.render();
    this.setGameData();
    this.setAnswer();
    this.setTimeGame();
    this.answers = [];
  }

  setTimeGame() {
    this.settings = settingsState.state;
    if (this.settings.timeGame) {
      const node = document.querySelector('.game-header');
      const range = document.createElement('progress');
      // range.type = 'range';
      range.max = this.settings.time;
      range.classList.add('time-game-indicator');
      range.value = 0;
      range.id = 'progressBar';
      const time = document.createElement('p');
      time.innerHTML = this.settings.time;
      time.classList.add('timer-game');
      node.appendChild(range);
      node.appendChild(time);

      let timeleft = this.settings.time;
      const downloadTimer = setInterval(() => {
        if (timeleft <= 0) {
          clearInterval(downloadTimer);
        }
        document.getElementById('progressBar').value = this.settings.time - timeleft;
        time.innerHTML = timeleft;
        timeleft -= 1;
      }, 1000);
      setTimeout(() => {
        this.calcAnswers(false, state.state.questNum);
        this.getModal(false);
      }, 1000 * this.settings.time + 1000);
    }
  }

  setGameData() {
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
    if (state.state.category === 'artists') {
      this.setAuthorAnswer();
    } else {
      this.setPicAnswer();
    }
    this.answers = this.shuffleAnswers();
    this.buttons.forEach((btn, idx) => {
      // eslint-disable-next-line no-param-reassign
      btn.textContent = this.answers[idx].answer;
      if (this.answers[idx].right) {
        this.answerResolve(btn, true);
      } else {
        this.answerResolve(btn, false);
      }
    });
    this.setExit();
  }

  setPicAnswer() {
    const textNode = document.querySelector('.question-game');
    textNode.innerHTML = 'Как называется данная картина';
    const node = document.querySelector('.main-image');
    node.src = `./assets/game/img/${this.pageData.imageNum}.webp`;
    this.buttons = Array.from(document.getElementsByClassName('answer-btn'));
    let count = 3;
    const rightAnswer = this.pageData.name;
    this.answers.push({ right: true, answer: rightAnswer });
    while (count !== 0) {
      const tmp = this.state.data[Math.floor(Math.random() * this.state.data.length)].name;
      if (tmp !== rightAnswer) {
        count -= 1;
        this.answers.push({ right: false, answer: tmp });
      }
    }
  }

  getModal(answer) {
    const node = document.createElement('div');
    this.rootNode.appendChild(node);
    node.classList.add('modal');
    const html = `
    <div class='check-img-wrapper'>
    <img class='modal-answer--img' src='./assets/game/img/${this.pageData.imageNum}.webp'>
      <img class='check-img' src='./assets/${answer ? 'true' : 'false'}.png' alt='check'>
    </div>
    <p class='answer-modal-name'>${this.pageData.name}</p>
    <p class='answer-mpodal-author'>${this.pageData.author},<span>${this.pageData.year}</span></p>
    <div id='modal-btn'>Далее</div>
    `;
    node.innerHTML = html;
    const nodeBtn = document.querySelector('#modal-btn');
    nodeBtn.addEventListener('click', () => {
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

  setAuthorAnswer() {
    const node = document.querySelector('.main-image');
    node.src = `./assets/game/img/${this.pageData.imageNum}.webp`;
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
  }

  setExit() {
    const node = document.querySelector('#home-route-btn');
    node.addEventListener('click', () => {
      state.dispatch({ name: 'questNum', value: 0 });
      this.questArr = null;
    });
  }

  answerResolve(ele, data) {
    ele.addEventListener('click', () => {
      this.calcAnswers(data, state.state.questNum);
      this.getModal(data);
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
  <div class='question-game'>Кто автор этой картины?</div>
  <img class='main-image' src=''>
  <div class='answers-wrapper'>
    <div class='answer-btn'>1</div>
    <div class='answer-btn'>2</div>
    <div class='answer-btn'>3</div>
    <div class='answer-btn'>4</div>
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
  ],
});

export default game;
