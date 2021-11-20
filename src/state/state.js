import Store from '../core/store';

/**
 * State class;
 * @module State
 */
class State extends Store {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    super(dto);
    this.state = dto;
  }
}

const state = new State({
  route: 'welcome',
  category: null,
  questions: null,
  artistsObj: null,
  picturesObj: null,
  questNum: 0,
  data: null,
});

export default state;
