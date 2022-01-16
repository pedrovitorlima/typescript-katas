import { validBraces } from '../../src/2-valid-braces/ValidBraces';

describe("solution", () => {
  describe("should return true given valid parameters", () => {
    const testInputs = [
      '()',
      '([])',
      '{([])}',
      '(({}))',
      '(([])()())',
    ];

    testInputs.forEach((testInput) => {
      test.each(testInputs) (
        'test input %p should be considered valid',
        (testInput) => {
          expect(validBraces(testInput)).toBeTruthy();
        }
      ) 
    })
  });

  describe('should return false given valid invalid parameters', () => {
    const testInputs = [
      '(()',
      '())(',
      ')(',
      ')[)',
      '({[]]})',
      ']'
    ];

    testInputs.forEach((testInput) => {
      test.each(testInputs) (
        'test input %p should be considered invalid',
        (testInput) => {
          expect(validBraces(testInput)).toBeFalsy();
        }
      )
    })
  });
});