import Store from '../core/store';

class State extends Store {
  constructor(dto) {
    super(dto);
    this.state = dto;
  }
}

export default State;
