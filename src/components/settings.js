import View from '../core/view';
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

export default SettingScreen;
