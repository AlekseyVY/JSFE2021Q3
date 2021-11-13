import View from '../core/view';
import state from '../state/state';
import settingsState from '../state/settingsState';
/**
 * View Class for Settings page;
 * @param {object} dto - data transfer object;
 */
class SettingScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
    this.timeTextNode = null;
    this.timeSlider = null;
    this.time = null;
    this.state = settingsState.state;
    this.volume = null;
    this.listenersArr = [
      { name: '#music', type: 'change', func: (e) => { this.state.music = e.target.checked; } },
      { name: '#sound', type: 'change', func: (e) => { this.state.sound = e.target.checked; } },
      { name: '#time', type: 'change', func: (e) => { this.state.timeGame = e.target.checked; } },
      {
        name: '#save_settings',
        type: 'click',
        func: () => {
          settingsState.dispatch({ name: 'state', value: this.state });
          this.state = settingsState.state;
        },
      },
      {
        name: '.volume_slider',
        type: 'input',
        func: (e) => {
          this.state.volume = e.target.value;
        },
      },
      {
        name: '.time_slider',
        type: 'input',
        func: (e) => {
          this.state.time = e.target.value;
          this.timeTextNode.innerHTML = this.state.time;
        },
      },
    ];
  }

  render() {
    super.render();
    this.setTime();
    this.setSound();
    this.setListeners();
  }

  setSound() {
    this.music = document.querySelector('#music');
    this.music.checked = this.state.music;
    this.sound = document.querySelector('#sound');
    this.sound.checked = this.state.sound;
    this.volume = document.querySelector('.volume_slider');
    this.volume.value = this.state.volume;
  }

  setTime() {
    this.timeTextNode = document.querySelector('.time_slider-value');
    this.timeTextNode.innerHTML = this.state.time;
    this.timeSlider = document.querySelector('.time_slider');
    this.timeSlider.value = this.state.time;
    this.time = document.querySelector('#time');
    this.time.checked = this.state.timeGame;
  }

  setListeners() {
    this.listenersArr.forEach((ele) => {
      const node = document.querySelector(ele.name);
      node.addEventListener(ele.type, ele.func);
    });
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
  <input class='volume_slider' type='range' min='0' max='100' step='1'>
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
  <div id='save_settings' class='category_welcome settings-btn'>Save</div>
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
