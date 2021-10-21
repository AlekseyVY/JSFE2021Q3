let api = null;

self.onmessage = (e) => {
  api = e.data;
  getWeather(api)
}

const getWeather = (api) => {
  const lang = api.lang === 'eng' ? 'en' : 'ru';
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${api.city}&lang=${lang}&appid=b8a8c166256629b7bfc205ded2ba4a0c&units=metric`)
    .then(res => res.json()
      .then(data => {
          const dto = {
            name: data.name,
            icon: data.weather[0].icon,
            temp: data.main.temp,
            desc: data.weather[0].description,
            wind: data.wind.speed,
            hym: data.main.humidity
        }
        postMessage(dto)
      }))
}
