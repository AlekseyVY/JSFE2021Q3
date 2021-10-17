import { WEEK } from '../../constants/week';
import { MONTH } from "../../constants/month";



const clock = () => {
  const date = new Date();
  const dto = {
    time: date.toLocaleTimeString(),
    date: `${WEEK[date.getDay()]}, ${MONTH[date.getMonth()]} ${date.getDate()}`
  }
  postMessage(dto);
  setTimeout(() => {
    clock();
  }, 1000);
};

clock();