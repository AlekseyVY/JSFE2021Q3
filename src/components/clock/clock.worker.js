import { WEEK } from '../../constants/week';
import { timeOfDay } from "../../helpers/timeOfDay";

let lang = 'eng';

self.onmessage = (e) => {
  lang = e.data;
  clock();
}

const clock = () => {
  const date = new Date();
  const options = lang === 'eng' ? 'en-US' : 'ru-RU';
  const time = date.toLocaleTimeString(options, {hour12: false});
  const localDate = date.toLocaleDateString(options, {month: 'long', day: 'numeric'})
  const dto = {
    time: time,
    date: `${WEEK[lang][date.getDay()]}, ${localDate}`,
    greet: timeOfDay(time, lang),
  };
  postMessage(dto);
  setTimeout(() => {
    clock();
  }, 1000);
};

clock();