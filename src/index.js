import {Settings} from "./components/settings";
import('normalize.css');
import('./main.scss');



new Settings({
  defaultSettings: {
    lang: 'eng',
    name: null
  },
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
})