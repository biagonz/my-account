const currencyFormat = (
  value: number,
  locale: string = 'pt-BR',
  currency: string = 'BRL'
) => {
  const number = Number((value / 100).toFixed(2));
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(number);
};

export { currencyFormat };
