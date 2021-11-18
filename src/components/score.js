import View from '../core/view';
import state from '../state/state';
import artState from '../state/artState';
import picState from '../state/picState';
/**
 * View Class for Score page;
 * @param {object} dto - data transfer object;
 */
class ProfileScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
    this.images = null;
    this.scoreState = null;
    this.node = null;
    this.rootNode = document.querySelector('#root');
    this.scoreTextNode = null;
  }

  render() {
    super.render();
    this.images = state.state.category === 'artists' ? state.state.artistsObj[state.state.questions].data : state.state.picturesObj[state.state.questions].data;
    this.scoreState = state.state.category === 'artists' ? artState.state[state.state.questions] : picState.state[state.state.questions];
    this.setScores();
  }

  setScores() {
    this.node = document.querySelector('.score-wrapper');
    this.scoreTextNode = document.querySelector('#score-text');
    this.scoreTextNode.innerHTML = this.scoreState.total;
    for (let i = 0; i <= 9; i += 1) {
      const tmp = document.createElement('div');
      tmp.classList.add('score-card');
      this.node.appendChild(tmp);
      if (this.scoreState[i]) {
        tmp.style.backgroundImage = `url('./assets/game/img/${this.images[i].imageNum}.webp')`;
      } else {
        tmp.style.backgroundImage = `linear-gradient(black, black), url('./assets/game/img/${this.images[i].imageNum}.webp')`;
      }
      tmp.addEventListener('click', () => {
        this.setModal(this.images[i]);
        const closeNode = document.querySelector('.score-btn');
        closeNode.addEventListener('click', () => {
          const remNode = document.querySelector('.modal');
          remNode.remove();
        });
      });
    }
  }

  setModal(data) {
    const node = document.createElement('div');
    this.rootNode.appendChild(node);
    node.classList.add('modal');
    const html = `
      <div class='check-img-wrapper'>
      <img class='modal-answer--img' src='./assets/game/img/${data.imageNum}.webp'>
      </div>
      <p class='answer-modal-name'>${data.name}</p>
      <p class='answer-mpodal-author'>${data.author},<span>${data.year}</span></p>
      <div id='modal-btn' class='score-btn'>закрыть</div>
    `;
    node.innerHTML = html;
  }
}

const profile = new ProfileScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <p class='score-outher-text'>Score is: <span id='score-text'>null</span>/10</p>
  <div class='score-wrapper'>
  </div>
  <div id='home-route-btn' class='score-button'>Назад</div>
  <div class='footer'>
  <a href='https://rs.school/' target="_blank">
  <img class='rs_logo' src='./assets/rs_logo.png' alt='RSS logo'>
  </a>
  <a class='my_logo' href='https://github.com/AlekseyVY' target="_blank">AlekseyVY</a>
  </div>
  `,
  listeners: [
    {
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'category' }, state,
    },
  ],
});

export default profile;
