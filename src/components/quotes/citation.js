

export class Citation {
  constructor(dto) {
    this.lang = dto.lang;
    this.quoteNode = document.querySelector(dto.quoteNode);
    this.authorNode = document.querySelector(dto.authorNode);
    this.updateNode = document.querySelector(dto.updateNode);

    this.worker = new Worker(new URL('quote.worker.js', import.meta.url));
    this.worker.postMessage(this.lang);
    this.worker.onmessage = (e) => {
      this.emitQuote(e.data)
    };

    this.updateNode.addEventListener('click', this.update)
  }

  emitQuote = (data) => {
    this.quoteNode.innerText = data.quote;
    this.authorNode.innerText = data.author;
  }

  terminate = () =>  {
    this.worker.terminate()
  }

  update = () => {
    this.worker.postMessage(this.lang);
  }
}