import Store from '../core/store';
/**
 * State class;
 * @param {object} dto - data transfer object;
 */
class State extends Store {
  constructor(dto) {
    super(dto);
    this.state = dto;
  }
}

export default State;
