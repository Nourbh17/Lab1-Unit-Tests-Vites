import { test, expect } from 'vitest';
import { fetchRandomUser } from '../src/async';


test('fetchRandomUser : retourner des données de  User Generator API', async () => {
  try {

    const user = await fetchRandomUser();


    expect(user).toBeDefined();
    expect(typeof user).toBe('object');
    expect(user).toHaveProperty('name');
    


  } catch (error) {
    fail('Error');
  }
});11