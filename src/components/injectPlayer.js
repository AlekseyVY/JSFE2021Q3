const injectPlayer = () => {
  const tmp = document.getElementsByClassName('container2')[0];
  tmp.innerHTML = '<video class="video_player">\n' +
    '    <source src="./assets/video/default_video.mp4" type="video/mp4">\n' +
    '  </video>\n' +
    '  <div class="main_play_btn opacity">\n' +
    '    <svg class="play_btn_svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
    '      <path d="M9.3,47.4a2.5,2.5,0,0,1-1.21-.32A2.47,2.47,0,0,1,6.8,44.89V3.11A2.5,2.5,0,0,1,10.63,1L44,21.88h0a2.5,2.5,0,0,1,0,4.24L10.63,47A2.49,2.49,0,0,1,9.3,47.4Zm0-45.79a1.5,1.5,0,0,0-.73.19A1.48,1.48,0,0,0,7.8,3.11V44.89a1.5,1.5,0,0,0,2.3,1.27l33.4-20.89a1.5,1.5,0,0,0,0-2.54L10.1,1.84A1.5,1.5,0,0,0,9.3,1.61Z"/>\n' +
    '      <rect width="48" height="48" fill="none"/>\n' +
    '    </svg>\n' +
    '  </div>\n' +
    '  <div class="main_play_btn-back opacity">\n' +
    '  </div>\n' +
    '  <div class="video_controls opacity">\n' +
    '    <div class="play_btn">\n' +
    '      <svg class="play_btn_svg" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
    '        <path d="M9.3,47.4a2.5,2.5,0,0,1-1.21-.32A2.47,2.47,0,0,1,6.8,44.89V3.11A2.5,2.5,0,0,1,10.63,1L44,21.88h0a2.5,2.5,0,0,1,0,4.24L10.63,47A2.49,2.49,0,0,1,9.3,47.4Zm0-45.79a1.5,1.5,0,0,0-.73.19A1.48,1.48,0,0,0,7.8,3.11V44.89a1.5,1.5,0,0,0,2.3,1.27l33.4-20.89a1.5,1.5,0,0,0,0-2.54L10.1,1.84A1.5,1.5,0,0,0,9.3,1.61Z"/>\n' +
    '        <rect width="48" height="48" fill="none"/>\n' +
    '      </svg>\n' +
    '    </div>\n' +
    '    <div class="progress_container">\n' +
    '      <progress class="progress" max="100" value="0">Progress</progress>\n' +
    '      <div class="progress_percentage">\n' +
    '        0%\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="sound_btn">\n' +
    '      <svg class="sound_btn_svg" width="48px" height="48px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">\n' +
    '        <path d="M24.48,47.39a2.46,2.46,0,0,1-1.82-.81L8.77,31.5H7.5A7.5,7.5,0,0,1,0,23.77,7.71,7.71,0,0,1,7.79,16.5h1L22.66,1.43A2.5,2.5,0,0,1,27,3.12V44.88a2.45,2.45,0,0,1-1.59,2.33A2.55,2.55,0,0,1,24.48,47.39ZM7.79,17.5A6.7,6.7,0,0,0,1,23.8a6.5,6.5,0,0,0,6.5,6.7H9a0.5,0.5,0,0,1,.37.16l14,15.23a1.5,1.5,0,0,0,2.6-1V3.12a1.5,1.5,0,0,0-2.6-1l-14,15.23A0.5,0.5,0,0,1,9,17.5H7.79Z"/>\n' +
    '        <path d="M31.75,40a0.5,0.5,0,0,1,0-1,15,15,0,0,0,0-30,0.5,0.5,0,0,1,0-1A16,16,0,0,1,31.75,40Z"/>\n' +
    '        <path d="M32,34a0.5,0.5,0,0,1,0-1,9,9,0,0,0,0-18,0.5,0.5,0,0,1,0-1A10,10,0,0,1,32,34Z"/>\n' +
    '        <path d="M32,28.5a0.5,0.5,0,0,1,0-1,3.5,3.5,0,0,0,0-7,0.5,0.5,0,0,1,0-1A4.5,4.5,0,0,1,32,28.5Z"/>\n' +
    '        <rect width="48" height="48" fill="none"/></svg>\n' +
    '    </div>\n' +
    '    <div class="progress_container">\n' +
    '      <progress class="volume" max="100" value="0">Progress</progress>\n' +
    '      <div class="volume_percentage">\n' +
    '        0%\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="fullscreen_btn">\n' +
    '      <svg class="fullscreen_svg" width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '        <path d="M33 6H42V15"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    '        <path d="M42 33V42H33"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    '        <path d="M15 42H6V33"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    '        <path d="M6 15V6H15"  stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    '      </svg>\n' +
    '    </div>\n' +
    '    <div class="playbackRate">\n' +
    '      0\n' +
    '    </div>\n' +
    '  </div>'
}


export default injectPlayer;