
let api;

self.onmessage = (e) => {
  api = e.data;
  console.log(api)
  const url = urlFactory(e.data);
  loadImage(url)
}


const loadImage = (url) => {
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      postMessage(blob);
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
}





/*
* folders: [afternoon, evening, morning, night]
* pictures: from 01 to 20
* extension: .jpg
* */
// template url https://github.com/AlekseyVY/stage1-tasks/assets/images/night/01.jpg