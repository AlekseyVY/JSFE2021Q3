/**
 * Base View Class;
 * @param {object} dto - data transfer object;
 * @method render - renders element into DOM;
 * @method listen - subscription method for state observer;
 * @method destroy - destroys previously rendered view;
 * @method listeners - adds event listeners;
 */
class View {
  constructor(dto) {
    this.html = dto.html;
    this.state = null;
    this.class = dto.class || null;
    this.selector = document.querySelector(dto.selector);
    this.tag = dto.tag;
    this.elem = document.createElement(this.tag);
    this.root = null;
    this.listenersArray = dto.listeners;
  }

  render() {
    this.elem.innerHTML = this.html;
    if (this.class) this.elem.classList.add(this.class);
    this.selector.append(this.elem);
    if (this.listenersArray) this.listeners();
  }

  listen(state) {
    this.state = state;
    this.render();
  }

  destroy(element) {
    this.root = document.querySelector(element);
    this.root.innerHTML = '';
  }

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
