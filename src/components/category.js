import View from '../core/view';
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

const base = Array.from({ length: 12 }, (v, i) => i);

const category = new CategoryScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <div class='button-wrapper'>
  <button id='home-route-btn' class='mdc-button mdc-button--raised'>Home</button>
  <div id="question_0" class="question_category">1</div>
  <div id="question_1" class="question_category">2</div>
  <div id="question_2" class="question_category">3</div>
  <div id="question_3" class="question_category">4</div>
  <div id="question_4" class="question_category">5</div>
  <div id="question_5" class="question_category">6</div>
  <div id="question_6" class="question_category">7</div>
  <div id="question_7" class="question_category">8</div>
  <div id="question_8" class="question_category">9</div>
  <div id="question_9" class="question_category">10</div>
  <div id="question_10" class="question_category">11</div>
  <div id="question_11" class="question_category">12</div>
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
