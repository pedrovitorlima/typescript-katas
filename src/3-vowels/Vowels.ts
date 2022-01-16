
export class Vowel {
    
    static getCount(givenString : string) : number {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        
        let qtdVowels: number = 0;
        [...givenString].forEach((givenVowel) => {
            if (vowels.includes(givenVowel)) {
                qtdVowels++;
            }
        });

        return qtdVowels;
    }
}