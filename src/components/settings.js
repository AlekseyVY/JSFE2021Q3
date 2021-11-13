import View from '../core/view';
import state from '../state/state';
/**
 * View Class for Settings page;
 * @param {object} dto - data transfer object;
 */
class SettingScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

const settings = new SettingScreen({
  selector: '#root',
  tag: 'main',
  class: 'container',
  html: `
  <div class='header'>
  <div id='inner_header' class='inner_header'>
  <img class='arrow_left' src='./assets/arrow_left.png'>
  <p class='inner_header-text'>
  settings
  </p>
  </div>
  <img id='home-route-btn' class='close' src='./assets/close.png'>
  </div>
  <div class='sound_block'>
  <div class='hover'>
    <input class='check' type="checkbox" id="music" name="music">
    <label for="music">Music</label>
  </div>
  <div class='hover'>
    <input class='check' type="checkbox" id="sound" name="sound">
    <label for="sound">Sounds</label>
  </div>
  <p>Volume</p>
  <div class='volume_slide-wrapper'>
  <img class='sound_icon' src='./assets/mute.png' alt='mute'>
  <input class='volume_slider' type='range'>
  <img class='sound_icon' src='./assets/volume_up.png' alt='mute'>
  </div>
  </div>
  <div class='time_block'>
  <div class='hover'>
    <input class='check' type="checkbox" id="time" name="time">
    <label for="time">Time game</label>
  </div>
  <p>Time to answer</p>
  <div class='time_slider-wrapper'>
  <p class='time_slider-value'>0</p>
  <input class='time_slider' type='range' min='5' max='30' step='5'>
  </div>
  </div>
  <div class='btn_wrapper'>
  <div id='default_settings' class='category_welcome'>Default</div>
  <div id='save_settings' class='category_welcome'>Save</div>
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
    },
    {
      id: 'inner_header', type: 'click', dispatch: { name: 'route', value: 'welcome' }, state,
    },
  ],
});

export default settings;
