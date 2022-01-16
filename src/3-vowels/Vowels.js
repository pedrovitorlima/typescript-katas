"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vowel = void 0;
class Vowel {
    static getCount(givenString) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let qtdVowels = 0;
        [...givenString].forEach((givenVowel) => {
            if (vowels.includes(givenVowel)) {
                qtdVowels++;
            }
        });
        return qtdVowels;
    }
}
exports.Vowel = Vowel;
