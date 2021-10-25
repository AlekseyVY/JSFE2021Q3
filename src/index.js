import {Settings} from "./components/settings";
import {Player} from "./components/player/player";
import {Td} from "./components/td";
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
      new Td()
    }
  }
}
loader()
console.log('Часы и календарь +15\n' +
  'Приветствие +10\n' +
  'Смена фонового изображения +20\n' +
  'Виджет погоды +15\n' +
  'Виджет цитата дня +10\n' +
  'Аудиоплеер +15\n' +
  'Продвинутый аудиоплеер (реализуется без использования библиотек) +20\n' +
  'Перевод приложения на два языка (en/ru или en/be) +15\n' +
  'Получение фонового изображения от API +10\n' +
  'Настройки приложения +17.5 (Настройки приложения сохраняются частично, приветствие, язык и город)\n' +
  'Дополнительный функционал на выбор +10 (ТОДО список)\n' +
  'ИТОГО: 157,5/160 баллов\n' +
  '\n' +
  'ВНИМАНИЕ: У Uniplash api есть лемит в 50 картинок в час, если не отображается то подождите.\n' +
  'Все поля ввода отслеживают ввод и срабатывают после того как вы перестаните вводить буквы в поле.')

