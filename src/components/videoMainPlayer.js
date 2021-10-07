export default class Player {
  constructor() {
    // DOM elements
    this.container = document.querySelector('.container2');
    this.player = this.container.querySelector('.video_player');
    this.video_progress = document.querySelector('.progress');
    this.progress_percent = document.querySelector('.progress_percentage');
    this.volume = document.querySelector('.volume');
    this.volume_percentage = document.querySelector('.volume_percentage');
    this.fullscreen_btn = document.querySelector('.fullscreen_btn');
    this.playbackRate_text = document.querySelector('.playbackRate');
    this.sound_btn = document.querySelector('.sound_btn');
    this.main_play_btn = document.querySelector('.main_play_btn');
    this.video_controls = document.querySelector('.video_controls');
    this.main_play_btn_back = document.querySelector('.main_play_btn-back');

    // event listeners
    this.play_btn = document.querySelector('.play_btn');
    this.play_btn.addEventListener('click', this.play);
    this.main_play_btn.addEventListener('click', this.play);
    this.video_progress.addEventListener('click', this.change_video_progress);
    this.volume.addEventListener('click', this.change_volume);
    this.fullscreen_btn.addEventListener('click', this.fullscreen);
    this.sound_btn.addEventListener('click', this.mute);
    this.container.addEventListener('mouseenter', this.controls_show);
    this.container.addEventListener('mouseleave', this.controls_hide);
    this.container.addEventListener('mousemove', this.controls_show);

    // global event listeners
    document.addEventListener('keydown', this.hotkeys);
    document.addEventListener('fullscreenchange', this.exitHandler);

    // set variables
    this.playbackRate_text.textContent = `${this.player.playbackRate}x`;
    this.volume.value = this.player.volume * 100;
    this.volume_percentage.textContent = `${this.volume.value}%`;
    this.mute_state = false;
    this.temp = null;
    this.fire_event = false;

    // function calls;
    this.progress();
    this.idle(this.controls_hide)
  }

  controls_show = () => {
    if(!this.fire_event) {
      this.video_controls.classList.remove('opacity');
      this.main_play_btn.classList.remove('opacity');
      this.main_play_btn_back.classList.remove('opacity');
      this.fire_event = true;
    }
  }

  controls_hide = () => {
    this.video_controls.classList.add('opacity');
    this.main_play_btn.classList.add('opacity');
    this.main_play_btn_back.classList.add('opacity');
    this.fire_event = false;
  }

  idle = (func) => {
    let time;
    document.onmousemove = resetTimer;
    document.onkeydown = resetTimer;

    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(func, 3000)
    }
  }

  exitHandler = () => {
    if(!document.fullscreenElement) {
      this.player.style.maxWidth = '1280px';
      this.player.style.maxHeight = '720px';
    }
  }

  hotkeys = (event) => {
    switch (event.code) {
      case 'KeyF':
        this.fullscreen();
        break;
      case 'Space':
        this.play();
        break;
      case 'KeyM':
        this.mute();
        break;
      case 'Comma':
        this.videoSpeed('down');
        break;
      case 'Period':
        this.videoSpeed('up');
        break;
      default:
        break;
    }
  }

  videoSpeed = (data) => {
    if(data === 'down' && this.player.playbackRate > 0) {
      this.player.playbackRate -= 0.25;
    }
    if(data === 'up' && this.player.playbackRate < 10) {
      this.player.playbackRate += 0.25;
    }
    this.playbackRate_text.textContent = `${this.player.playbackRate}x`;
  }

  mute = () => {
    if(!this.mute_state) {
      this.temp = this.player.volume;
      this.player.volume = 0;
      this.volume.value = 0;
      this.volume_percentage.textContent = `${this.volume.value}%`;
      this.mute_state = true;
      this.sound_btn.innerHTML = '<svg class="sound_btn_svg" width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M26.93,47.39a2.46,2.46,0,0,1-1.82-.81L11.22,31.5H10a7.5,7.5,0,0,1-7.5-7.73,7.71,7.71,0,0,1,7.79-7.27h1L25.11,1.43a2.5,2.5,0,0,1,4.34,1.69V44.88a2.45,2.45,0,0,1-1.59,2.33A2.56,2.56,0,0,1,26.93,47.39ZM10.25,17.5a6.7,6.7,0,0,0-6.79,6.3A6.5,6.5,0,0,0,10,30.5h1.49a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V3.12a1.5,1.5,0,0,0-2.6-1l-14,15.23a0.5,0.5,0,0,1-.37.16H10.25Z"/>\n' +
        '<path d="M35.86,29.1a0.5,0.5,0,0,1-.35-0.85l9.19-9.19a0.5,0.5,0,0,1,.71.71l-9.19,9.19A0.5,0.5,0,0,1,35.86,29.1Z"/>\n' +
        '<path d="M45,29.1a0.5,0.5,0,0,1-.35-0.15L35.5,19.76a0.5,0.5,0,0,1,.71-0.71l9.19,9.19A0.5,0.5,0,0,1,45,29.1Z"/>\n' +
        '<rect width="48" height="48" fill="none"/>\n' +
        '</svg>';
    } else {
      this.player.volume = this.temp;
      this.volume.value = this.player.volume * 100;
      this.volume_percentage.textContent = `${this.volume.value}%`;
      this.temp = null;
      this.mute_state = false;
      this.sound_btn.innerHTML = '      <svg class="sound_btn_svg" width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <path d="M24.48,47.39a2.46,2.46,0,0,1-1.82-.81L8.77,31.5H7.5A7.5,7.5,0,0,1,0,23.77,7.71,7.71,0,0,1,7.79,16.5h1L22.66,1.43A2.5,2.5,0,0,1,27,3.12V44.88a2.45,2.45,0,0,1-1.59,2.33A2.55,2.55,0,0,1,24.48,47.39ZM7.79,17.5A6.7,6.7,0,0,0,1,23.8a6.5,6.5,0,0,0,6.5,6.7H9a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V3.12a1.5,1.5,0,0,0-2.6-1l-14,15.23A0.5,0.5,0,0,1,9,17.5H7.79Z"/>\n' +
        '        <path d="M31.75,40a0.5,0.5,0,0,1,0-1,15,15,0,0,0,0-30,0.5,0.5,0,0,1,0-1A16,16,0,0,1,31.75,40Z"/>\n' +
        '        <path d="M32,34a0.5,0.5,0,0,1,0-1,9,9,0,0,0,0-18,0.5,0.5,0,0,1,0-1A10,10,0,0,1,32,34Z"/>\n' +
        '        <path d="M32,28.5a0.5,0.5,0,0,1,0-1,3.5,3.5,0,0,0,0-7,0.5,0.5,0,0,1,0-1A4.5,4.5,0,0,1,32,28.5Z"/>\n' +
        '        <rect width="48" height="48" fill="none"/></svg>';
    }
  }

  fullscreen = () => {
    if(document.fullscreenElement) {
      document.exitFullscreen().then();
      this.fullscreen_btn.innerHTML = '      <svg class="fullscreen_svg" width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <path d="M33 6H42V15"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '        <path d="M42 33V42H33"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '        <path d="M15 42H6V33"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '        <path d="M6 15V6H15"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '      </svg>';
    } else {
      this.container.requestFullscreen().then(() => {
        this.player.style.maxWidth = '100%';
        this.player.style.maxHeight = '100%';
        this.fullscreen_btn.innerHTML = '<svg class="fullscreen_svg width="48px" height="48px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
          '    <g id="🔍-Product-Icons"  stroke-width="1" fill="none" fill-rule="evenodd">\n' +
          '        <g id="ic_fluent_full_screen_zoom_24_regular"  fill-rule="nonzero">\n' +
          '            <path d="M16.25,15.5 L20.25,15.5 C20.6642136,15.5 21,15.8357864 21,16.25 C21,16.6296958 20.7178461,16.943491 20.3517706,16.9931534 L20.25,17 L17,17 L17,20.25 C17,20.6642136 16.6642136,21 16.25,21 C15.8703042,21 15.556509,20.7178461 15.5068466,20.3517706 L15.5,20.25 L15.5,16.25 C15.5,15.8703042 15.7821539,15.556509 16.1482294,15.5068466 L16.25,15.5 L20.25,15.5 L16.25,15.5 Z M3.75,15.5 L7.75,15.5 C8.12969577,15.5 8.44349096,15.7821539 8.49315338,16.1482294 L8.5,16.25 L8.5,20.25 C8.5,20.6642136 8.16421356,21 7.75,21 C7.37030423,21 7.05650904,20.7178461 7.00684662,20.3517706 L7,20.25 L7,17 L3.75,17 C3.33578644,17 3,16.6642136 3,16.25 C3,15.8703042 3.28215388,15.556509 3.64822944,15.5068466 L3.75,15.5 L7.75,15.5 L3.75,15.5 Z M7.75,3 C8.12969577,3 8.44349096,3.28215388 8.49315338,3.64822944 L8.5,3.75 L8.5,7.75 C8.5,8.12969577 8.21784612,8.44349096 7.85177056,8.49315338 L7.75,8.5 L3.75,8.5 C3.33578644,8.5 3,8.16421356 3,7.75 C3,7.37030423 3.28215388,7.05650904 3.64822944,7.00684662 L3.75,7 L7,7 L7,3.75 C7,3.33578644 7.33578644,3 7.75,3 Z M16.25,3 C16.6296958,3 16.943491,3.28215388 16.9931534,3.64822944 L17,3.75 L17,7 L20.25,7 C20.6642136,7 21,7.33578644 21,7.75 C21,8.12969577 20.7178461,8.44349096 20.3517706,8.49315338 L20.25,8.5 L16.25,8.5 C15.8703042,8.5 15.556509,8.21784612 15.5068466,7.85177056 L15.5,7.75 L15.5,3.75 C15.5,3.33578644 15.8357864,3 16.25,3 Z" id="🎨-Color"></path>\n' +
          '        </g>\n' +
          '    </g>\n' +
          '</svg>';
      })
    }
  }

  change_video_progress = (event) => {
    const data = event.offsetX * this.video_progress.max / this.video_progress.offsetWidth;
    this.player.currentTime = Math.round(data * this.player.duration / 100);
  }

  change_volume = (event) => {
    this.volume.value = Math.round(event.offsetX * this.volume.max / this.volume.offsetWidth);
    this.volume_percentage.textContent = `${this.volume.value}%`;
    this.player.volume = this.volume.value / 100;
  }

  play = () => {
    const state = this.player.paused ? 'play' : 'pause';
    this.play_btn.innerHTML = state === 'play'
      ? '<svg class="play_btn_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
      '\t viewBox="0 0 202.205 202.205"  xml:space="preserve">\n' +
      '\t\t<path d="M23.483,202.205H85.83V0H23.483V202.205z M31.417,7.934h46.479v186.336H31.417V7.934z"/>\n' +
      '\t\t<path d="M116.372,0v202.205h62.351V0H116.372z M170.788,194.271h-46.486V7.934h46.482v186.336H170.788z"/>\n' +
      '</svg>'
      : '      <svg class="play_btn_svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
      '        <path d="M9.3,47.4a2.5,2.5,0,0,1-1.21-.32A2.47,2.47,0,0,1,6.8,44.89V3.11A2.5,2.5,0,0,1,10.63,1L44,21.88h0a2.5,2.5,0,0,1,0,4.24L10.63,47A2.49,2.49,0,0,1,9.3,47.4Zm0-45.79a1.5,1.5,0,0,0-.73.19A1.48,1.48,0,0,0,7.8,3.11V44.89a1.5,1.5,0,0,0,2.3,1.27l33.4-20.89a1.5,1.5,0,0,0,0-2.54L10.1,1.84A1.5,1.5,0,0,0,9.3,1.61Z"/>\n' +
      '        <rect width="48" height="48" fill="none"/>\n' +
      '      </svg>';
    this.main_play_btn.innerHTML = state === 'play'
      ? '<svg class="play_btn_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
      '\t viewBox="0 0 202.205 202.205" xml:space="preserve">\n' +
      '\t\t<path  d="M23.483,202.205H85.83V0H23.483V202.205z M31.417,7.934h46.479v186.336H31.417V7.934z"/>\n' +
      '\t\t<path  d="M116.372,0v202.205h62.351V0H116.372z M170.788,194.271h-46.486V7.934h46.482v186.336H170.788z"/>\n' +
      '</svg>'
      : '      <svg class="play_btn_svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
      '        <path d="M9.3,47.4a2.5,2.5,0,0,1-1.21-.32A2.47,2.47,0,0,1,6.8,44.89V3.11A2.5,2.5,0,0,1,10.63,1L44,21.88h0a2.5,2.5,0,0,1,0,4.24L10.63,47A2.49,2.49,0,0,1,9.3,47.4Zm0-45.79a1.5,1.5,0,0,0-.73.19A1.48,1.48,0,0,0,7.8,3.11V44.89a1.5,1.5,0,0,0,2.3,1.27l33.4-20.89a1.5,1.5,0,0,0,0-2.54L10.1,1.84A1.5,1.5,0,0,0,9.3,1.61Z"/>\n' +
      '        <rect width="48" height="48" fill="none"/>\n' +
      '      </svg>'
    this.player[state]();
  }

  progress = () => {
    setInterval( () => {
      if (this.player.currentTime === 0) {
        this.video_progress.value = 0;
      } else {
        this.video_progress.value = Math.round((this.player.currentTime / this.player.duration) * 100);
        this.progress_percent.textContent = `${this.video_progress.value}%`;
        // if (this.player.currentTime === this.player.duration) this.play_btn.innerHTML = '      <svg width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
        //   '        <path d="M9.3,47.4a2.5,2.5,0,0,1-1.21-.32A2.47,2.47,0,0,1,6.8,44.89V3.11A2.5,2.5,0,0,1,10.63,1L44,21.88h0a2.5,2.5,0,0,1,0,4.24L10.63,47A2.49,2.49,0,0,1,9.3,47.4Zm0-45.79a1.5,1.5,0,0,0-.73.19A1.48,1.48,0,0,0,7.8,3.11V44.89a1.5,1.5,0,0,0,2.3,1.27l33.4-20.89a1.5,1.5,0,0,0,0-2.54L10.1,1.84A1.5,1.5,0,0,0,9.3,1.61Z"/>\n' +
        //   '        <rect width="48" height="48" fill="none"/>\n' +
        //   '      </svg>';
      }
    });
  }
}