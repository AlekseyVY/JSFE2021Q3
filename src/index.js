import {Settings} from "./components/settings";
import('normalize.css');
import('./main.scss');



new Settings({
  defaultSettings: {
    lang: 'eng',
    name: null
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
  }
})