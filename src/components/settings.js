import {Clock} from "./clock/clock";
import {Citation} from "./quotes/citation";
import {api} from "../helpers/api";
import {Greeting} from "./geeting";
import {Slides} from "./slider/slider";
import {Weather} from "./weather/weather";

export class Settings {
  constructor(dto) {
    this.settings = dto.defaultSettings;
    // main nodes
    this.settingsNode = document.querySelector(dto.settingsNode);
    this.containerNode = document.querySelector(dto.containerNode);
    this.settingsArray = Array.from(document.querySelector(dto.settingsArray).children);
    // language nodes and selectors
    this.langMainNode = document.querySelector(dto.lang.mainSelector);
    this.langSubNode = document.querySelector(dto.lang.subContainer);
    this.firstLang = document.querySelector(dto.lang.firstLang.langSelector);
    this.firstLangType = dto.lang.firstLang.type;
    this.secLang = document.querySelector(dto.lang.secLang.langSelector);
    this.secLangType = dto.lang.secLang.type;
    this.error = document.querySelector('.weather-error');
    // slide nodes and selectors
    this.slidesNode = document.querySelector(dto.slides.slidesNode);
    this.slidesAPINode = document.querySelector(dto.slides.slideApiContainer);
    this.githubNode = document.querySelector(dto.slides.github);
    this.unsplashNode = document.querySelector(dto.slides.unisplash);
    this.flickrNode = document.querySelector(dto.slides.flickr);
    this.tagsNode = document.querySelector(dto.slides.tag);
    this.leftNode = document.querySelector(dto.slides.controlLeft);
    this.rightNode = document.querySelector(dto.slides.controlRight);
    this.slidesMode = false;
    // weather nodes and selectors
    this.cityNode = document.querySelector(dto.weather.cityNode);
    this.iconNode = document.querySelector(dto.weather.iconNode);
    this.celsiusNode = document.querySelector(dto.weather.celsiusNode);
    this.windNode = document.querySelector(dto.weather.windNode);
    this.humidityNode = document.querySelector(dto.weather.humidityNode);

    this.vis = document.querySelector('.vis-selection');
    this.visCont = document.querySelector('.visibility');
    this.playerContainer = document.querySelector('.player-container');
    this.weatherContainer = document.querySelector('.weather-container');
    this.clockContainer = document.querySelector('.clock-wrapper');
    this.citationContainer = document.querySelector('.citation-wrapper');
    this.playerVis = document.querySelector('.player-vis');
    this.weatherVis = document.querySelector('.weather-vis');
    this.mainVis = document.querySelector('.clock-vis');
    this.citationVis = document.querySelector('.citation-vis');

    // class states
    this.mode = false;
    this.langMode = false;
    this.firstLangSelected = false;
    this.secLangSelected = false;
    // function calls
    this.listen('click', this.settingsNode, this.container);
    this.langFactory();
    this.slidesFactory();

    this.vis.addEventListener('click', (e) => {
      this.clearActive();
      this.visCont.classList.remove('idle')
    })

    this.visCont.addEventListener('click', (e) => {
      if(e.target.id === 'player-vis') {
        this.switcher(e, this.playerContainer)
      }
      if(e.target.id === 'weather-vis') {
        this.switcher(e, this.weatherContainer)
      }
      if(e.target.id === 'clock-vis') {
        this.switcher(e, this.clockContainer)
      }
      if(e.target.id === 'citation-vis') {
        this.switcher(e, this.citationContainer)
      }
    })

    // api calls to local storage
    window.onload = async () => {
      const res = this.getSettings();
      if(res) this.settings = JSON.parse(res);
      // setting language
      this.settingsLang()

      this.clock = new Clock({
        lang: this.settings.lang,
        timeNode: '.main-clock',
        dateNode: '.main-date',
        greetNode: '.main-greeting'
      });
      this.quote = new Citation({
        lang: this.settings.lang,
        quoteNode: '.citation',
        authorNode: '.author',
        updateNode: '.citation-update'
      })
      this.greet = new Greeting({
        nameNode: '.main-name',
        lang: this.settings.lang,
        name: this.settings.name
      });
      this.slides = new Slides({
        githubNode: this.githubNode,
        unsplashNode: this.unsplashNode,
        flickrNode: this.flickrNode,
        tagsNode:  this.tagsNode,
        leftNode: this.leftNode,
        rightNode: this.rightNode,
      })
      this.weather = new Weather({
        lang: this.settings.lang,
        default: this.settings.city,
        city: this.cityNode,
        icon: this.iconNode,
        celsius: this.celsiusNode,
        wind: this.windNode,
        humidity: this.humidityNode
      })
    }

    window.onbeforeunload = () => {
      this.settings.name = this.greet.getName();
      this.settings.city = this.cityNode.value;
      this.storeSettings(JSON.stringify(this.settings));
    }
  }

  // START of utility functions
  settingsLang = () => {
    if(this.settings.lang === 'eng') {
      this.langMainNode.innerText = 'language'
      this.firstLang.innerText = 'english'
      this.secLang.innerText = 'russian'
      this.slidesNode.innerText = 'slides'
      this.githubNode.innerText = 'Github API'
      this.unsplashNode.innerText = 'Unisplash API'
      this.flickrNode.innerText = 'Flickr API'
      this.tagsNode.placeholder = '[Enter your tag]'
      this.error.innerText = 'You entered wrong city'
      this.vis.innerText = 'visibility'
      this.playerVis.innerText = 'player'
      this.weatherVis.innerText = 'weather'
      this.mainVis.innerText = 'main'
      this.citationVis.innerText = 'citation'
    } else {
      this.langMainNode.innerText = 'язык'
      this.firstLang.innerText = 'английский'
      this.secLang.innerText = 'русский'
      this.slidesNode.innerText = 'слайды'
      this.githubNode.innerText = 'Гитхаб АПИ'
      this.unsplashNode.innerText = 'Унисплэшь АПИ'
      this.flickrNode.innerText = 'Фликр АПИ'
      this.tagsNode.placeholder = '[Введите тэг]'
      this.error.innerText = 'Введите правильный город'
      this.vis.innerText = 'видимость'
      this.playerVis.innerText = 'проигрыватель'
      this.weatherVis.innerText = 'погода'
      this.mainVis.innerText = 'основа'
      this.citationVis.innerText = 'цитаты'
    }
  }

  switcher = (e, elem) => {
    if(e.target.classList.contains('on')) {
      e.target.classList.remove('on')
      e.target.classList.add('off')
      elem.classList.add('idle')
    } else {
      e.target.classList.remove('off')
      e.target.classList.add('on')
      elem.classList.remove('idle')
    }
  }


  clearActive = () => {
    this.settingsArray.forEach((ele) => {
      if(!ele.classList.contains('idle')) ele.classList.add('idle');
    })
  }

  storeSettings(data) {
    api('settings', data, 'set');
  }

  getSettings() {
    return api('settings', null, 'get')
  }

  listen = (event, node, func) =>{
    node.addEventListener(event, (e) => {
      func(e);
    })
  }
  // END of utility functions

  // START of language selection logic
  container = () => {
    this.mode = !this.mode;
    this.mode ? this.containerNode.classList.remove('idle') : this.containerNode.classList.add('idle');
  }

  langFactory = () => {
    this.listen('click', this.langMainNode, () => {
      this.clearActive();
      this.langMode = !this.langMode;
      this.langMode ? this.langSubNode.classList.remove('idle') :  this.langSubNode.classList.add('idle');
      // this.langMode ? this.langMainNode.classList.add('selected') :  this.langMainNode.classList.remove('selected');
    });
    this.langSwitch('click', this.firstLang, this.firstLangType, this.firstLangSelected);
    this.langSwitch('click', this.secLang, this.secLangType, this.secLangSelected);
  }

  langSwitch = (event, lang, langType, langTypeSelector) => {
    this.listen(event, lang, () => {
      langTypeSelector = !langTypeSelector;
      this.settings.lang = langType;
      this.settingsLang();
      this.clock.terminate();
      this.clock = new Clock({
        lang: this.settings.lang,
        timeNode: '.main-clock',
        dateNode: '.main-date',
        greetNode: '.main-greeting'
      });
      this.quote.terminate();
      this.quote = new Citation({
        lang: this.settings.lang,
        quoteNode: '.citation',
        authorNode: '.author',
        updateNode: '.citation-update'
      })
      this.greet = new Greeting({
        nameNode: '.main-name',
        lang: this.settings.lang,
        name: this.settings.name
      });

      this.weather.terminate();
      this.weather = new Weather({
        lang: this.settings.lang,
        default: this.cityNode.value,
        city: this.cityNode,
        icon: this.iconNode,
        celsius: this.celsiusNode,
        wind: this.windNode,
        humidity: this.humidityNode
      })
    });
  }
  // END of language selection logic

  // START of slides logic
  slidesFactory = () => {
    this.listen('click', this.slidesNode, () => {
      this.clearActive();
      this.slidesMode = !this.slidesMode;
      this.slidesMode ? this.slidesAPINode.classList.remove('idle') :  this.slidesAPINode.classList.add('idle');
    })
  }
  // END of slides logic

  // START of audio logic
  // END of audio logic
}