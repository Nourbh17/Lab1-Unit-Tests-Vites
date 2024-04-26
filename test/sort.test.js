import { test, expect } from 'vitest';
import { sort} from '../src/sort';


test('Test 1 :  tableau non trié', () => {
    const result = sort([8,2,1,9,4]);
    expect(result).toEqual([1, 2, 4, 8, 9]);
  });


test('Test 2 :  tableau vide', () => {
  const result = sort([]);
  expect(result).toEqual([]);
});


test('Test 3 : tableau trié', () => {
  const result = sort([1, 2, 3, 4, 5, 6, 7]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});


test('Test 4 : tableau inversé', () => {
  const result = sort([7, 6, 5, 4, 3, 2, 1]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
});


test('Test 5 :tableau contenant des éléments non numériques', () => {
  const result = sort([7, 'n', 3, 0, 'o']);
  expect(result).toEqual([0, 3, 7, 'n', 'o']);
});