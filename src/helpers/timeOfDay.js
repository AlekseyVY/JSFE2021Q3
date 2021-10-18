const GREET = {
  'eng': {
    0: 'Good morning, ',
    1: 'Good afternoon, ',
    2: 'Good evening, ',
    3: 'Good night, '
  },
  'rus': {
    0: 'Доброе утро, ',
    1: 'Доброго дня, ',
    2: 'Доброго вечера, ',
    3: 'Доброй ночи, '
  }
}


export const timeOfDay = (data, lang) => {
  const [hour, minute] = String(data).split(':');
  const numHour = Number(hour);
  const numMinute = Number(minute);
  if((numHour >= 6 && numMinute >= 0) && (numHour <= 11 && numMinute <= 59)) return GREET[lang][0];
  if((numHour >= 12 && numMinute >= 0) && (numHour <= 17 && numMinute <= 59)) return GREET[lang][1];
  if((numHour >= 18 && numMinute >= 0) && (numHour <= 23 && numMinute <= 59)) return GREET[lang][2];
  if((numHour >= 0 && numMinute >= 0) && (numHour <= 5 && numMinute <= 59)) return GREET[lang][3];
}