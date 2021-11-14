import View from '../core/view';
import state from '../state/state';
import artState from '../state/artState';
import picState from '../state/picState';
/**
 * View Class for Category page;
 * @param {object} dto - data transfer object;
 */
class CategoryScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
    this.categoryName = null;
  }

  render() {
    super.render();
    this.setCategory();
    console.log(artState);
    console.log(picState);
  }

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
    <div id="question_0" class="question_category">round 1</div>
    <div id="question_1" class="question_category">round 2</div>
    <div id="question_2" class="question_category">round 3</div>
    <div id="question_3" class="question_category">round 4</div>
    <div id="question_4" class="question_category">round 5</div>
    <div id="question_5" class="question_category">round 6</div>
    <div id="question_6" class="question_category">round 7</div>
    <div id="question_7" class="question_category">round 8</div>
    <div id="question_8" class="question_category">round 9</div>
    <div id="question_9" class="question_category">round 10</div>
    <div id="question_10" class="question_category">round 11</div>
    <div id="question_11" class="question_category">round 12</div>
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
