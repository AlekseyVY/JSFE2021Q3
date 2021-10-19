import {Greeting} from "./components/geeting";
import {Settings} from "./components/settings";
import('normalize.css');
import('./main.scss');


new Greeting({
  nameNode: '.main-name',
  lang: 'eng',
});

new Settings({
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

