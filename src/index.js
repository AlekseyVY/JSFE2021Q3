import {Clock} from "./components/clock/clock";
import {Greeting} from "./components/geeting";
import('normalize.css');
import('./main.scss');

new Clock({
  timeNode: '.main-clock',
  dateNode: '.main-date',
  greetNode: '.main-greeting'
});

new Greeting({
  nameNode: '.main-name'
});

