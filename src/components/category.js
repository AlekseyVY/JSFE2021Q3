import View from '../core/view';
/**
 * View Class for Category page;
 * @param {object} dto - data transfer object;
 */
class CategoryScreen extends View {
  constructor(dto) {
    super(dto);
    this.dto = dto;
  }
}

export default CategoryScreen;
