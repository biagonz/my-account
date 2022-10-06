function getDate(date: Date, locale: string) {
  return date?.toLocaleDateString(locale, {
    day: "2-digit",
    weekday: "long",
    month: "long",
    year: "numeric",
  });
}

function getTime(date: Date, locale: string) {
  return date?.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export { getDate, getTime };
