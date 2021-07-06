import { Anagrams } from '../src/app';

const testArray = ['hola', 'olha'];

describe('Anagram', () => {
  it('constructore should return array', () => {
    expect(new Anagrams(testArray).words).toStrictEqual(['hola', 'olha']);
  });
});
