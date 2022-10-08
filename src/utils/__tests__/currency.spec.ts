import { describe, it, expect } from 'vitest';
import { currencyFormat } from '../currency';

describe('Currency Utils', () => {
  const locale = 'pt-BR';
  const currency = 'BRL';

  it('should format correct currency', () => {
    const response = currencyFormat(3030022, locale, currency);
    expect(response).toBe('R$\xa030.300,22');
  });
});
