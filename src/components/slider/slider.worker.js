
let api;

self.onmessage = (e) => {
  api = e.data;
  console.log(api)
  const url = urlFactory(e.data);
  if(api.source === 'github') {
    loadGit(url);
  } else {
    loadApi(url)
  }
}

const loadGit = (url) => {
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      postMessage(blob);
    })
}

const loadApi = (url) => {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json.links)
      fetch(json.links.html, )
        .then(res => {
          console.log(res)
          return res.blob()
        })
        .then(blob => {
          postMessage(blob);
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
    console.log('uniplash')
    return `https://api.unsplash.com/photos/random?query=${dayTime}&client_id=x3eswxPzWXmGDQU4DxczZ4dGoyhUSiyaHKKMJeaP-Fg`;
  }
}