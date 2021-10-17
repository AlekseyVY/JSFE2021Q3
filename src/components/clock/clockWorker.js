import { WEEK } from '../../constants/week';
import { MONTH } from "../../constants/month";
import { timeOfDay } from "../../helpers/timeOfDay";

const clock = () => {
  const date = new Date();
  const time = date.toLocaleTimeString('ru-RU', {hour12: false});
  const dto = {
    time: time,
    date: `${WEEK[date.getDay()]}, ${MONTH[date.getMonth()]} ${date.getDate()}`,
    greet: timeOfDay(time),
  };
  postMessage(dto);
  setTimeout(() => {
    clock();
  }, 1000);
};

clock();


