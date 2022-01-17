
export function missingLetter(input: string[]):string {

    let alphabet = getAlphabetCaseDependingOnInputCase(input);
    let missingLetter = '';
    let alphabetIndex = alphabet.indexOf(input[0]);

    for(let inputIndex=0; inputIndex<input.length; inputIndex++, alphabetIndex++) {
        const alphabetLetter = alphabet[alphabetIndex];
        const inputLetter = input[inputIndex];

        if (alphabetLetter != inputLetter) {
            return alphabetLetter;
        }
    }

    return missingLetter;
}

function getAlphabetCaseDependingOnInputCase(array: string[]):string[] {
    let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
    if (array[0] == array[0].toUpperCase()) {
        alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    }
    return alphabet;
}