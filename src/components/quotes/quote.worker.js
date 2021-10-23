let lang = 'eng';
let intervalID = null;
self.onmessage = (e) => {
  lang = e.data;
  getQuote();
  if(intervalID) {
    clearInterval(intervalID);
    intervalID = setInterval(() => getQuote(), 10000);
  } else {
    intervalID = setInterval(() => getQuote(), 10000);
  }
};

const getQuote = () => {
  fetch('./assets/data/data.json')
    .then(res => res.json())
    .then(data => {
      const randQuote = Math.floor(Math.random() * data[0][lang].length);
      postMessage(data[0][lang][randQuote]);
    });
};