class View {
  constructor(dto) {
    this.html = dto.html;
    this.state = null;
    this.selector = document.querySelector(dto.selector);
    this.tag = dto.tag;
    this.elem = document.createElement(this.tag);
  }

  render() {
    this.elem.innerHTML = this.html;
    this.selector.append(this.elem);
  }

  listen(state) {
    this.state = state;
    this.render();
  }
}

export default View;
