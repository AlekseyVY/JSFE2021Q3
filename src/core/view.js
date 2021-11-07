class View {
  constructor(dto) {
    this.html = dto.html;
    this.state = null;
    this.class = dto.class || null;
    this.selector = document.querySelector(dto.selector);
    this.tag = dto.tag;
    this.elem = document.createElement(this.tag);
  }

  render() {
    this.elem.innerHTML = this.html;
    if (this.class) this.elem.classList.add(this.class);
    this.selector.append(this.elem);
  }

  listen(state) {
    this.state = state;
    this.render();
  }
}

export default View;
