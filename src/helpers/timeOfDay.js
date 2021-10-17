export const timeOfDay = (data) => {
  const [hour, minute] = String(data).split(':');
  const numHour = Number(hour);
  const numMinute = Number(minute);
  if((numHour >= 6 && numMinute >= 0) && (numHour <= 11 && numMinute <= 59)) return 'Good morning, ';
  if((numHour >= 12 && numMinute >= 0) && (numHour <= 17 && numMinute <= 59)) return 'Good afternoon, ';
  if((numHour >= 18 && numMinute >= 0) && (numHour <= 23 && numMinute <= 59)) return 'Good evening, ';
  if((numHour >= 0 && numMinute >= 0) && (numHour <= 5 && numMinute <= 59)) return 'Good night, ';
}