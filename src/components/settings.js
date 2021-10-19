// TODO: settings class that control application appearance and behaviour

import {Clock} from "./clock/clock";
import {Citation} from "./quotes/citation";
import {api} from "../helpers/api";
import {Greeting} from "./geeting";

export class Settings {
  constructor(dto) {
    this.settings = dto.defaultSettings;
    // main nodes
    this.settingsNode = document.querySelector(dto.settingsNode);
    this.containerNode = document.querySelector(dto.containerNode);
    // language nodes and selectors
    this.langMainNode = document.querySelector(dto.lang.mainSelector);
    this.langSubNode = document.querySelector(dto.lang.subContainer);
    this.firstLang = document.querySelector(dto.lang.firstLang.langSelector);
    this.firstLangType = dto.lang.firstLang.type;
    this.secLang = document.querySelector(dto.lang.secLang.langSelector);
    this.secLangType = dto.lang.secLang.type;
    // class states
    this.mode = false;
    this.langMode = false;
    this.firstLangSelected = false;
    this.secLangSelected = false;
    // function calls
    this.listen('click', this.settingsNode, this.container);
    this.langFactory();

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
    }

    window.onbeforeunload = () => {
      this.settings.name = this.greet.getName();
      this.storeSettings(JSON.stringify(this.settings));
    }
  }

  settingsLang = () => {
    if(this.settings.lang === 'eng') {
      this.langMainNode.innerText = 'language'
      this.firstLang.innerText = 'english'
      this.secLang.innerText = 'russian'
    } else {
      this.langMainNode.innerText = 'язык'
      this.firstLang.innerText = 'английский'
      this.secLang.innerText = 'русский'
    }
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

  // START of language selection logic
  container = () => {
    this.mode = !this.mode;
    console.log(this.mode);
    this.mode ? this.containerNode.classList.remove('idle') : this.containerNode.classList.add('idle');
  }

  langFactory = () => {
    this.listen('click', this.langMainNode, () => {
      this.langMode = !this.langMode;
      this.langMode ? this.langSubNode.classList.remove('idle') :  this.langSubNode.classList.add('idle');
      this.langMode ? this.langMainNode.classList.add('selected') :  this.langMainNode.classList.remove('selected');
    });

    this.listen('click', this.firstLang, () => {
      this.firstLangSelected = !this.firstLangSelected ;
      this.settings.lang = this.firstLangType;
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
    });

    this.listen('click', this.secLang, () => {
      this.secLangSelected = !this.secLangSelected;
      this.settings.lang = this.secLangType;
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
    });
  }
  // END of language selection logic
}