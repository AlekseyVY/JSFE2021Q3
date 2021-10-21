


export class Weather {
  constructor(dto) {
    this.lang = dto.lang;
    this.user = dto.city;
    this.city = dto.default ? dto.default  : 'Minsk';
    this.icon = dto.icon;
    this.celsius = dto.celsius;
    this.speed = dto.wind;
    this.hum = dto.humidity;
    this.langPref = {
      eng: {
        wind: 'Wind speed:',
        s: 'm/s',
        hum: 'Humidity:'
      },
      rus: {
        wind: 'Скорость ветра:',
        s: 'м/с',
        hum: 'Влажность:'
      }
    }
    this.data = {
      lang: this.lang,
      city: this.city
    }

    this.worker = new Worker(new URL('weather.worker.js', import.meta.url));
    this.worker.postMessage(this.data);
    this.worker.onmessage = (e) => {
      console.log(e.data)
      this.icon.src = `https://openweathermap.org/img/w/${e.data.icon}.png`
      this.celsius.innerHTML = `${Math.floor(e.data.temp)}&#176;C  ${e.data.desc}`;
      this.speed.innerText = `${this.langPref[this.lang].wind} ${Math.floor(e.data.wind)} ${this.langPref[this.lang].s}`;
      this.hum.innerText = `${this.langPref[this.lang].hum} ${Math.floor(e.data.hym)}%`;
      this.user.value = e.data.name;
      console.log(dto)
    }

    this.listen('input', this.user, (e) => {
      this.data.city = e.target.value;
      let timeout;
      let typing = true;
      this.user.addEventListener('keypress', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          typing = false;
          this.worker.postMessage(this.data)
        }, 5000);
      })
    })
  }

  listen = (event, node, func) =>{
    node.addEventListener(event, (e) => {
      func(e);
    })
  }

  terminate = () => {
    this.worker.terminate();
  }
}


// weatherIcon.classList.add(`owf-${data.weather[0].id}`);