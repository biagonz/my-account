import { describe, it, expect } from 'vitest';
import { getFullDate, getDate, getTime } from '../timer';

describe('Timer Utils', () => {
  const locale = 'pt-BR';
  it('should format date correct', () => {
    const dateOrder = new Date('2022-06-21T17:03:00Z');
    const response = getTime(dateOrder, locale);
    expect(response).toEqual('14:03');
  });

  it('should format date correct', () => {
    const dateOrder = new Date('2022-06-21T17:03:00Z');
    const response = getFullDate(dateOrder, locale);
    expect(response).toEqual('terça-feira, 21 de junho de 2022');
  });

  it('should format date correct', () => {
    const dateOrder = new Date('2022-06-21T17:03:00Z');
    const response = getDate(dateOrder, locale);
    expect(response).toEqual({ day: 21, month: 'Jun', year: 2022 });
  });
});
