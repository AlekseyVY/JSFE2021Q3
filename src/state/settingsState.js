import Store from '../core/store';

/**
 * State class fo artists category;
 * @module SettingsState
 */
class SettingsState extends Store {
  /**
   * @param {object} dto data transfer object
   */
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
