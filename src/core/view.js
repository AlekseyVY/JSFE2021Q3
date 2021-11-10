/**
 * Base View Class;
 * @module View
 */
class View {
  /**
   * @param {object} dto - data transfer object
   */
  constructor(dto) {
    this.html = dto.html;
    this.state = null;
    this.class = dto.class;
    this.selector = document.querySelector(dto.selector);
    this.tag = dto.tag;
    this.elem = document.createElement(this.tag);
    this.root = null;
    this.listenersArray = dto.listeners;
  }

  /**
   * Renders html into DOM and adds event listeners.
   * @method render
   */
  render() {
    this.elem.innerHTML = this.html;
    if (this.class) this.elem.classList.add(this.class);
    this.selector.append(this.elem);
    if (this.listenersArray) this.listeners();
  }

  /**
   * Method for subscription, listens for state changes and rerenders;
   * @param {object} state - state object from store;
   * @method listen
   */
  listen(state) {
    this.state = state;
    this.render();
  }

  /**
   * Method takes element and destroys it in DOM
   * @param {string} element - DOM element
   * @method destroy
   */
  destroy(element) {
    this.root = document.querySelector(element);
    this.root.innerHTML = '';
  }

  /**
   * Adds event listeners to rendered html;
   * @method listeners
   */
  listeners() {
    this.listenersArray.forEach((element) => {
      const node = document.querySelector(`#${element.id}`);
      node.addEventListener(element.type, () => {
        element.state.dispatch(element.dispatch);
      });
    });
  }
}

export default View;
