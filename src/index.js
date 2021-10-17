import {Clock} from "./components/clock/clock";
import('normalize.css');
import('./main.scss');




new Clock({
  timeNode: '.main-clock',
  dateNode: '.main-date',
  greetNode: '.main-greeting'
});

