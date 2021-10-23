import {Settings} from "./components/settings";
import {Player} from "./components/player/player";
import('normalize.css');
import('./main.scss');


const loader = () => {
  document.onreadystatechange = function() {
    if(document.readyState === "complete") {
      const preloader = document.querySelector('.preload');
      const main = document.querySelector('body');
      preloader.style.display = 'none';
      main.classList.remove('hide')

      new Settings({
        defaultSettings: {
          lang: 'eng',
          name: null,
          city: 'Minsk'
        },
        settingsArray: '.sub-settings',
        settingsNode: '.settings-icon',
        containerNode: '.settings-container',
        lang: {
          mainSelector: '.language-selector',
          subContainer: '.english-sub',
          firstLang: {
            type: 'eng',
            langSelector: '.set-eng'
          },
          secLang: {
            type: 'rus',
            langSelector: '.set-rus'
          }
        },
        slides: {
          controlLeft: '.left-slide--control',
          controlRight: '.right-slide--control',
          slidesNode: '.slides-selection',
          slideApiContainer: '.slides-api',
          github: '.set-github',
          unisplash: '.set-unisplash',
          flickr: '.set-flickr',
          tag: '.tag-input'
        },
        weather: {
          cityNode: '.weather-city',
          iconNode: '.weather-icon',
          celsiusNode: '.weather-celsius',
          windNode: '.weather-wind',
          humidityNode: '.weather-humidity'
        }
      })


      new Player()
    }
  }
}
loader()


