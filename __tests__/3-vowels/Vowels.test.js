"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution = require("../../src/3-vowels/Vowels");
describe('the Vowel class', () => {
    it('The class and function exists', () => {
        const getCount = solution.Vowel.getCount;
        expect(typeof getCount).toBe('function');
    });
    describe('Given a valid input with lower case letters and/or spaces', () => {
        describe('When the function is called', () => {
            it('Then it will count the vowels', () => {
                const givenString = 'abghubhstemndi';
                expect(solution.Vowel.getCount(givenString)).toBe(4);
            });
            it('Then it will return zero if there is no vowels', () => {
                const givenString = 'sdfrwtghyplmkn';
                expect(solution.Vowel.getCount(givenString)).toBe(0);
            });
        });
    });
});
