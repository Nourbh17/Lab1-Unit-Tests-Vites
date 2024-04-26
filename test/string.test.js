import { test,expect } from 'vitest';
import { transform } from './src/string'; 

test('Test 1 de la fonction transform: chaîne vide', () => {
    const result = transform('');
    expect(result).toBe('');
  });

  test('Test 2 de la fonction transform: chaîne avec des caractères en minuscules', () => {
    const result = transform('bonjour');
    expect(result).toBe('BONJOUR');
  });
  
  test('Test 3 de la fonction transform: chaîne avec des caractères spéciaux', () => {
    const result = transform('hi@#hello');
    expect(result).toBe('HI@#HELLO');
  });
 