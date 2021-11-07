import View from '../core/view';
/**
 * View Class for Welcome page;
 * @param {object} dto - data transfer object;
 */
class WelcomeScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

export default WelcomeScreen;
