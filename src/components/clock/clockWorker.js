import { WEEK } from '../../constants/week';
import { MONTH } from "../../constants/month";
import { timeOfDay } from "../../helpers/timeOfDay";

let lang = 'eng';

self.onmessage = (e) => {
  lang = e.data;
  clock();
}

const clock = () => {
  const date = new Date();
  const time = date.toLocaleTimeString('ru-RU', {hour12: false});
  const dto = {
    time: time,
    date: `${WEEK[lang][date.getDay()]}, ${MONTH[lang][date.getMonth()]} ${date.getDate()}`,
    greet: timeOfDay(time, lang),
  };
  postMessage(dto);
  setTimeout(() => {
    clock();
  }, 1000);
};

clock();