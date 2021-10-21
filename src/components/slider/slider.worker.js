
let api;
let intervalID = null;
self.onmessage = (e) => {
  api = e.data;
  const url = urlFactory(api);
  if(api.source === 'github') loadGit(url)
  if(api.source === 'unsplash') loadApi(url)
  if(api.source === 'flickr') loadFlickr(url)
  if(intervalID) {
    clearInterval(intervalID);
    apiCalls(api);
  } else {
    apiCalls(api);
  }
}

const apiCalls = (api) => {
  const url = urlFactory(api);
  if(api.source === 'github') {
    intervalID = setInterval(() => {
      api.num = Math.floor(Math.random() * 20) + 1
      const url = urlFactory(api);
      loadGit(url)
    }, 10000);
  }
  if(api.source === 'unsplash') intervalID = setInterval(() => loadApi(url), 10000);
  if(api.source === 'flickr') intervalID = setInterval(() => loadFlickr(url), 10000);
}

const loadGit = (url) => {
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      postMessage({blob: blob, num: api.num});
    })
}

const loadApi = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      fetch(json.urls.regular)
        .then(res => {
          return res.blob()
        })
        .then(blob => {
          postMessage({blob: blob, num: api.num});
        })
    })
}

const loadFlickr = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      fetch(json.photos.photo[Math.floor(Math.random() * json.photos.photo.length)].url_l)
        .then(res => {
          return res.blob()
        })
        .then(blob => {
          postMessage({blob: blob, num: api.num});
        })
    })
}

const urlFactory = (api) => {
  let dayTime = null;
  const num = api.num < 10 ? `0${api.num}` : api.num;
  const date = new Date();
  const time = date.toLocaleTimeString('ru-RU', {hour12: false});
  const [hour] = String(time).split(':');
  if((hour >= 6 ) && (hour <= 11)) dayTime = 'morning';
  if((hour >= 12 ) && (hour <= 17 )) dayTime = 'afternoon';
  if((hour >= 18 ) && (hour <= 23 )) dayTime = 'evening';
  if((hour >= 0 ) && (hour <= 5 )) dayTime = 'night';

  if(api.source === 'github') {
    return `https://raw.githubusercontent.com/AlekseyVY/stage1-tasks/assets/images/${dayTime}/${num}.jpg`
  }
  if(api.source === 'unsplash') {
    return `https://api.unsplash.com/photos/random?orientation=landscape&query=${dayTime}&query=${api.tag}&client_id=x3eswxPzWXmGDQU4DxczZ4dGoyhUSiyaHKKMJeaP-Fg`;
  }
  if(api.source === 'flickr') {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=b5246e42907fad07311adb9365d8934b&tag_mode=all&tags=${dayTime},${api.tag}&extras=url_l&format=json&nojsoncallback=1`
  }
}