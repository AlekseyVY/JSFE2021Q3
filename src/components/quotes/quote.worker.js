let lang = 'eng';

self.onmessage = (e) => {
  lang = e.data;
  getQuote();
}

const getQuote = () => {
  fetch('./../assets/data/data.json')
    .then(res => res.json())
    .then(data => {
      const randQuote = Math.floor(Math.random() * data[0][lang].length);
      postMessage(data[0][lang][randQuote]);
    });
  // setTimeout(() => {
  //   getQuote();
  // }, 10000)
};