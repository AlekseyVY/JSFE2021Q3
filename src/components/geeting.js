export class Greeting {
  constructor(dto) {
    this.nameNode = document.querySelector(dto.nameNode);
    this.nameNode.placeholder = dto.lang === 'eng' ? '[Enter Your name]' : '[Введите ваше имя]'
    this.nameNode.value = dto.name ? dto.name : '';
    this.lang = dto.lang
    this.name = this.nameNode.value;
    this.nameNode.addEventListener('input', (e) => {
      this.name = e.target.value;
    })
  }

  getName() {
    return this.name;
  }
}