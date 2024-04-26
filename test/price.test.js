import { test,expect } from 'vitest';
import { isPriceInRange } from '../src/price'; 

test('Test 1 : price entre min et max', () => {
  const result = isPriceInRange(100, 20, 500);
  expect(result).toBeTruthy()
});

test('Test 2 : limite min', () => {
    const result = isPriceInRange(20, 20, 500);
    expect(result).toBeTruthy()
  });

test('Test 3 : limite max', () => {
    const result = isPriceInRange(500, 20, 500);
    expect(result).toBeTruthy()
  }); 

  test('Test 4 : en dehors de la plage', () => {
    const result = isPriceInRange(10, 20, 500);
    expect(result).toBeFalsy()
  }); 

  test('Test 5 : en dehors de la plage', () => {
    const result = isPriceInRange(1000, 20, 500);
    expect(result).toBeFalsy()
  }); 