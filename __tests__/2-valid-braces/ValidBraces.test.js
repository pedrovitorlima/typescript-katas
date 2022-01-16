"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidBraces_1 = require("../../src/2-valid-braces/ValidBraces");
describe("solution", () => {
    describe("should return true given valid parameters", () => {
        const testInputs = [
            '()',
            '([])',
            '{([])}',
            '(({}))',
            '(([])()())',
        ];
        test.each(testInputs)('test input %p should be considered valid', (testInput) => {
            expect((0, ValidBraces_1.validBraces)(testInput)).toBeTruthy();
        });
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
        test.each(testInputs)('test input %p should be considered invalid', (testInput) => {
            expect((0, ValidBraces_1.validBraces)(testInput)).toBeFalsy();
        });
    });
});
