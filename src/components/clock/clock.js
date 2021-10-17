// TODO: clock class with web worker


export class Clock {
  constructor(dto) {
    this.timeNode = document.querySelector(dto.timeNode);
    this.dateNode = document.querySelector(dto.dateNode);
    this.greetNode = document.querySelector(dto.greetNode);
    this.worker = new Worker(new URL('clockWorker.js', import.meta.url));
    // worker data
    this.worker.onmessage = (e) => {
      this.time(e.data.time).then(null);
      this.date(e.data.date).then(null);
    }
  }

  async time(data) {
    this.timeNode.textContent = data;
  }

  async date(data) {
    this.dateNode.textContent = data;
  }
}