/**
 * Web worker that fetches data and return it to Worker class
 * @module webWorker
 */
const getJson = () => {
  fetch('./assets/data/images.json')
    .then((res) => res.json())
    .then((data) => {
      postMessage(data);
    });
};
// eslint-disable-next-line no-restricted-globals
self.onmessage = () => {
  getJson();
};
