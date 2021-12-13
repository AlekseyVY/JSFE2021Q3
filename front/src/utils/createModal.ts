const createModal = (text: string, _class: string) => {
  if (!document.querySelector(`.${_class}`)) {
    const node = document.querySelector('#root');
    const child = document.createElement('div');
    child.classList.add(_class);
    child.innerHTML = text;
    node?.append(child);
    setTimeout(() => {
      child.remove();
    }, 2000);
  }
};

export default createModal;
