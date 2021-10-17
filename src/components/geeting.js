import { api } from "../helpers/api";

export class Greeting {
  constructor(dto) {
    this.nameNode = document.querySelector(dto.nameNode);
    this.name = '';
    this.nameNode.addEventListener('input', (e) => {
      this.name = e.target.value;
    })
    window.onload = async () => {
      const res = await this.getName()
      this.nameNode.value = res ? res : ''
    }
    window.onbeforeunload = async () => {
      if(this.name) await this.storeName(this.name);
    }
  }

  async storeName(data) {
    api('user', data, 'set');
  }

  async getName() {
    return api('user', null, 'get')
  }
}