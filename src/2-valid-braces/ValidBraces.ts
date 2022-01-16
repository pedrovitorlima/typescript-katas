"use strict";

const CLOSING_SYMBOL = [']', ')', '}'];

export function validBraces(braces: string) : boolean {
    //all good, return true
    const isEntireStringConsumed = braces.length == 0;

    if (isEntireStringConsumed) {
        return true;
    }
    
    //has errors
    const startsWithClosingBraces = CLOSING_SYMBOL.includes(braces.charAt(0));
    const hasOddLength = braces.length % 2;
    const token = cleanEmptyBraces();
    const thereIsNoEmptyBraces = token.length != 0 && braces.length == token.length;

    if (startsWithClosingBraces || hasOddLength || thereIsNoEmptyBraces) {
        return false;
    }

    return validBraces(token);   


    function cleanEmptyBraces() {
        return braces.replace('()', '').replace('[]', '').replace('{}', '');
    }
}