import Store from '../core/store';

/**
 * State class fo artists category;
 * @param {object} dto - data transfer object;
 */
class SettingsState extends Store {
  constructor(dto) {
    super(dto);
    this.state = dto;
  }
}

const dto = localStorage.getItem('artQuizSettings');
let data = {
  sound: false,
  volume: 100,
  timeGame: false,
  time: 5,
};
if (dto) data = JSON.parse(dto);

const settingsState = new SettingsState(data);

window.onbeforeunload = () => {
  localStorage.setItem('artQuizSettings', (JSON.stringify(settingsState.getState())));
};

export default settingsState;
