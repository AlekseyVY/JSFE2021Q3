export class Slides {
  constructor(dto) {
    this.githubNode = dto.githubNode;
    this.unsplashNode = dto.unsplashNode;
    this.flickrNode = dto.flickrNode;
    this.tagsNode = dto.tagsNode;
    this.background = document.querySelector('body');
    this.leftNode = dto.leftNode;
    this.rightNode = dto.rightNode;
    this.loading = false;
    this.clicked = false;
    this.api = {
      source: 'github',
      tag: 'nature',
      num: Math.floor(Math.random() *20) + 1
    };
    this.worker = new Worker(new URL('slider.worker.js', import.meta.url));
    this.worker.postMessage(this.api);
    this.worker.onmessage = (e) => {
      const objectURL = URL.createObjectURL(e.data.blob);
      this.background.style.backgroundImage = `url("${objectURL}")`;
      this.loading = false;
      this.api.num = e.data.num;
      setTimeout(() => {
        URL.revokeObjectURL(objectURL);
      },6000000)
    };

    this.listen('click', this.githubNode, (e) => {
      this.api.source = 'github';
      this.worker.postMessage(this.api);
    })
    this.listen('click', this.unsplashNode, (e) => {
      this.api.source = 'unsplash';
      this.worker.postMessage(this.api);
    })
    this.listen('click', this.flickrNode, (e) => {
      this.api.source = 'flickr';
      this.worker.postMessage(this.api);
    })
    this.listen('click', this.leftNode, (e) => {
      console.log(this.clicked)
      if(!this.clicked) {
        if(!this.loading) {
          this.api.num = this.api.num - 1 <= 0 ? 20 : this.api.num - 1;
          this.worker.postMessage(this.api);
          this.loading = true;
          this.clicked = true;
          setTimeout(() => {
            this.clicked = false;
          }, 1000)
        }
      }
    })
    this.listen('click', this.rightNode, (e) => {
      if(!this.clicked) {
        if(!this.loading) {
          this.api.num = this.api.num + 1 > 20 ? 1 : this.api.num + 1;
          this.worker.postMessage(this.api);
          this.loading = true;
          this.clicked = true;
          setTimeout(() => {
            this.clicked = false;
          }, 1000)
        }
      }
    })
    this.listen('input', this.tagsNode, (e) => {
      this.api.tag = e.target.value;
      let timeout;
      let typing = true;
      this.tagsNode.addEventListener('keypress', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          typing = false;
          this.worker.postMessage(this.api)
        }, 5000);
      })
    })
  }

  listen = (event, node, func) =>{
    node.addEventListener(event, (e) => {
      func(e);
    })
  }
}