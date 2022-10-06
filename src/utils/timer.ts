import MONTH_ABBR from '../enums/months';

function getFullDate(date: Date, locale: string) {
  return date?.toLocaleDateString(locale, {
    day: '2-digit',
    weekday: 'long',
    month: 'long',
    year: 'numeric',
  });
}

function getTime(date: Date, locale: string) {
  return date?.toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function getDate(date: Date, locale: string) {
  const day = date.getDate();
  const month = MONTH_ABBR[date.getMonth()];
  const year = date.getFullYear();

  return { day, month, year };
}

export { getFullDate, getDate, getTime };
