/*
* с 6:00 до 11:59 - Good morning / Доброе утро / Добрай раніцы
с 12:00 до 17:59 - Good afternoon / Добрый день / Добры дзень
с 18:00 до 23:59 - Good evening / Добрый вечер / Добры вечар
с 00:00 до 5:59 - Good night / Доброй/Спокойной ночи / Дабранач
* */


export const timeOfDay = (data) => {
  const [hour, minute] = String(data).split(':');
  const numHour = Number(hour);
  const numMinute = Number(minute);
  if((numHour >= 6 && numMinute >= 0) && (numHour <= 11 && numMinute <= 59)) return 'Good morning';
  if((numHour >= 12 && numMinute >= 0) && (numHour <= 17 && numMinute <= 59)) return 'Good afternoon';
  if((numHour >= 18 && numMinute >= 0) && (numHour <= 23 && numMinute <= 59)) return 'Good evening';
  if((numHour >= 0 && numMinute >= 0) && (numHour <= 5 && numMinute <= 59)) return 'Good night';
}