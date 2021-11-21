import Glide from '@glidejs/glide';
import View from '../core/view';
import state from '../state/state';

/**
 * Tutorial view class
 * @module Tutorial
 */
class Tutorial extends View {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }

  /**
   * renders Tutorila screen
   * @method render
   */
  render() {
    super.render();
    new Glide('.glide').mount();
  }
}

const tutorial = new Tutorial({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">
        <img src='./assets/tutorial/1.webp'>
        <div class='tutorial-text--wraper'>
        <p><b>главный экран:</b></p>
          <p>1 - Выбор категории игры</p>
          <p>2 - Настройки приложения</p>
          <p>3 - Ссылка на школу</p>
          <p>4 - Ссылка на Гитхаб автора</p>
        </div>
      </li>
      <li class="glide__slide">
        <img src='./assets/tutorial/2.webp'>
        <div class='tutorial-text--wraper'>
        <p><b>Экран настроек:</b></p>
          <p>1 - Переключатель звуков в игре</p>
          <p>2 - Громкость звуков приложения</p>
          <p>3 - Переключатель игры на время</p>
          <p>4 - Выбор времени отведенного на ответ</p>
          <p>5 - Полная документация проекта</p>
          <p>6 - кнопка сохранения настроек и перехода на домашний экран</p>
        </div>
      </li>
      <li class="glide__slide">
        <img src='./assets/tutorial/3.webp'>
        <div class='tutorial-text--wraper'>
          <p><b>Экран категорий:</b></p>
          <p>1 - Кнопка перехода на главный экран</p>
          <p>2 - Название категорий</p>
          <p>3 - Карточка начала раунда</p>
          <p>4 - Значек перехода в очки раунда, при клике переводит в очки раунда.</p>
          <p>5 - Количество заработанных очков в прошлом раунде</p>
          <p>6 - Название раунда</p>
        </div>
      </li>
      <li class="glide__slide">
        <img src='./assets/tutorial/4.webp'>
        <div class='tutorial-text--wraper'>
          <p><b>Экран игры:</b></p>
          <p>1 - Кнопка выхода из игры</p>
          <p>2 - Полоса таймера, если включена игра на время</p>
          <p>3 - Счетчик таймера, если включена игра на время</p>
          <p>4 - Вопрос</p>
          <p>5 - Картинка</p>
          <p>6 - Кнопки с вариантами ответов</p>
      </div>
      </li>
      <li class="glide__slide">
        <img src='./assets/tutorial/5.webp'>
        <div class='tutorial-text--wraper'>
          <p><b>Экран ответа:</b></p>
          <p>1 - Модальное окно содержащее данные об ответе</p>
          <p>2 - Картинка</p>
          <p>3 - Индикатор ответа, зеленый если ответили правильно, красный если не правильно</p>
          <p>4 - Правильный ответ</p>
          <p>5 - Интересные факты о вопросе</p>
          <p>6 - Кнопка далее, продолжает игру</p>
        </div>
      </li>
      <li class="glide__slide">
        <img src='./assets/tutorial/6.webp'>
        <div class='tutorial-text--wraper'>
          <p><b>Экран конца раунда:</b></p>
          <p>1 - Значек кубка</p>
          <p>2 - Текст поздравления</p>
          <p>3 - Количество очков заработанных за раунд</p>
          <p>4 - Кнопка перехода на главный экран</p>
          <p>5 - Кнопка перехода в меню категории для выбора следующего раунда</p>
        </div>
      </li>
      <li class="glide__slide">
        <img src='./assets/tutorial/7.webp'>
        <div class='tutorial-text--wraper'>
          <p><b>Экран очков раунда:</b></p>
          <p>1 - Количество очков заработанных за раунд</p>
          <p>2 - картинки раунда, серые если отвечены не правильно, цветные если правильно</p>
          <p>3 - модальное окно, появляется при щелчке на картинку, показывает данные по выбранной картинке</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left score-btn glow-on-hover" data-glide-dir="<">предыдущий</button>
    <button class="glide__arrow glide__arrow--right score-btn glow-on-hover" data-glide-dir=">">следующий</button>
  </div>
</div>
<div id='home-route' class='score-btn glow-on-hover tutorial-btn'>Назад</div>
  `,
  listeners: [
    {
      id: 'home-route', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    },
  ],
});

export default tutorial;
