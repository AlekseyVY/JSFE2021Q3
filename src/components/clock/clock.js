export class Clock {
  constructor(dto) {
    this.lang = dto.lang;
    this.timeNode = document.querySelector(dto.timeNode);
    this.dateNode = document.querySelector(dto.dateNode);
    this.greetNode = document.querySelector(dto.greetNode);
    this.worker = new Worker(new URL('clockWorker.js', import.meta.url));
    this.worker.postMessage(this.lang);
    this.worker.onmessage = (e) => {
      this.emitTime(e.data.time).then(null);
      this.emitDate(e.data.date).then(null);
      this.emitGreeting(e.data.greet).then(null);
    };
  };

  async emitTime(data) {
    this.timeNode.textContent = data;
    console.log(this.lang)
  };

  async emitDate(data) {
    this.dateNode.textContent = data;
  };

  async emitGreeting(data) {
    this.greetNode.textContent = data;
  }

  terminate() {
    this.worker.terminate();
  }
}