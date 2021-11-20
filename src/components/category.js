/* eslint-disable no-param-reassign */
import View from '../core/view';
import state from '../state/state';
import artState from '../state/artState';
import picState from '../state/picState';
/**
 * View Class for Category page;
 * @module CategoryPage
 */
class CategoryScreen extends View {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    super(dto);
    this.dto = dto;
    this.categoryName = null;
    this.categoriesArr = null;
    this.images = null;
    this.catState = null;
    this.scoreArr = null;
    this.scoreLinkNode = null;
  }

  /**
   * renders category page
   * @method render
   */
  render() {
    super.render();
    this.setCategory();
    this.images = this.categoryName === 'artists' ? state.state.artistsObj : state.state.picturesObj;
    this.catState = this.categoryName === 'artists' ? artState.state : picState.state;
    this.scoreArr = Array.from(document.getElementsByClassName('score_count'));
    this.setImages();
  }

  /**
   * Set's images for each round as first image of the round, set's state of picture round,
   * if played: colored, else: monochrome.
   * @method setImages
   */
  setImages() {
    this.categoriesArr = Array.from(document.getElementsByClassName('question_category'));
    this.categoriesArr.forEach((ele, idx) => {
      const data = this.images[idx].data[0].imageNum;
      this.scoreArr[idx].innerHTML = `${this.catState[idx].total}/10`;
      if (this.catState[idx].played) {
        this.setScoreLink(ele);
        ele.style.backgroundImage = `url('./assets/game/img/${data}.webp')`;
      } else {
        ele.style.backgroundImage = `linear-gradient(black, black), url('./assets/game/img/${data}.webp')`;
      }
    });
  }

  /**
   * Set's clicable link to score section, if round was played.
   * @method setScoreLink
   * @param {object} ele Html Node
   */
  setScoreLink(ele) {
    this.scoreLinkNode = document.createElement('img');
    this.scoreLinkNode.src = './assets/win.png';
    this.scoreLinkNode.classList.add('score-icon');
    this.scoreLinkNode.alt = 'score';
    ele.append(this.scoreLinkNode);
    this.scoreLinkNode.addEventListener('click', (e) => {
      e.stopPropagation();
      state.dispatch({ name: 'questions', value: `${ele.id.split('_')[1]}` });
      state.dispatch({ name: 'route', value: 'score' });
    });
  }

  /**
   * Set's name for category of rounds
   * @method setCategory
   */
  setCategory() {
    this.categoryName = state.state.category;
    const node = document.querySelector('#category_name');
    node.innerHTML = this.categoryName;
  }
}

const base = Array.from({ length: 12 }, (v, i) => i);

const category = new CategoryScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <div class='category-header'>
    <img class='category-logo' src='./assets/inner_logo.png' alt='logo'>
    <p id='home-route-btn'>Home</p>
    <p id='category_name'>null</p> 
  </div>
  <div class='questions-wrapper'>
    <div id="question_0" class="question_category"><span class='score_count'>null</span>round 1</div>
    <div id="question_1" class="question_category"><span class='score_count'>null</span>round 2</div>
    <div id="question_2" class="question_category"><span class='score_count'>null</span>round 3</div>
    <div id="question_3" class="question_category"><span class='score_count'>null</span>round 4</div>
    <div id="question_4" class="question_category"><span class='score_count'>null</span>round 5</div>
    <div id="question_5" class="question_category"><span class='score_count'>null</span>round 6</div>
    <div id="question_6" class="question_category"><span class='score_count'>null</span>round 7</div>
    <div id="question_7" class="question_category"><span class='score_count'>null</span>round 8</div>
    <div id="question_8" class="question_category"><span class='score_count'>null</span>round 9</div>
    <div id="question_9" class="question_category"><span class='score_count'>null</span>round 10</div>
    <div id="question_10" class="question_category"><span class='score_count'>null</span>round 11</div>
    <div id="question_11" class="question_category"><span class='score_count'>null</span>round 12</div>
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
      id: 'home-route-btn', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    }, ...base.map((ele, idx) => ({
      id: `question_${idx}`, type: 'click', dispatch: { name: 'questions', value: `${idx + 1}` }, state,
    })), ...base.map((ele, idx) => ({
      id: `question_${idx}`, type: 'click', dispatch: { name: 'route', value: 'game' }, state,
    })),
  ],
});

export default category;
