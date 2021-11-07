import View from '../core/view';
/**
 * View Class for Profile page;
 * @param {object} dto - data transfer object;
 */
class ProfileScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

export default ProfileScreen;
