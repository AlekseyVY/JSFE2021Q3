import Store from '../core/store';

/**
 * State class fo artists category;
 * @module ArtState
 */
class ArtState extends Store {
  /**
   * @param {object} dto data transfer object
   */
  constructor(dto) {
    super(dto);
    this.state = dto;
  }
}

const CATEGORY_NUM = 11;
const QUESTIONS_NUM = 9;

const generate = () => {
  const dto = {};
  let outer = 0;
  while (outer <= CATEGORY_NUM) {
    dto[outer] = {};
    let inner = 0;
    dto[outer].id = outer;
    while (inner <= QUESTIONS_NUM) {
      dto[outer][inner] = false;
      inner += 1;
    }
    dto[outer].total = 0;
    dto[outer].played = false;
    outer += 1;
  }
  return dto;
};

const artState = new ArtState(generate());

export default artState;
