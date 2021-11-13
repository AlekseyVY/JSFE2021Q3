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

const settingsState = new SettingsState({
  music: false,
  sound: false,
  volume: 100,
  timeGame: false,
  time: 5,
});

export default settingsState;
