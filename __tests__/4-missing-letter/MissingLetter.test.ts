import { missingLetter } from "../../src/4-missing-letter/MissingLetter"

describe('Missing letter', () => {

    it("The function exists", () => {
        expect(typeof missingLetter).toBe('function');
    })

    describe("Given a set valid lowercase inputs starting at 'a'", () => {
        
        const scenarios = [
            ["abcdfghi", "e"],
            ["abcdefghijklmopqrstuvwxyz", "n"],
            ["abcdefghijklmnopqrstuvwyz", "x"],
            ["abcdeghijklmnopqrstuvwxyz", "f"],
            ["abcdefghijkmnopqrstuvwxyz", "l"],
            ["abcdefghijklmnpqrstuvwxyz", "o"]
        ];

        test.each(scenarios)(
            "When call the function with %p then should return %p",
            (scenario, result) => {
                expect(missingLetter([...scenario])).toBe(result);
            }
        );
    })

    describe("Given a set of valid uppercase inputs starting at 'A'", () => {
        const scenarios = [
            ["ABCDFGHI", "E"],
            ["ABCDEFGHIJKLMOPQRSTUVWXYZ", "N"],
            ["ABCDEFGHIJKLMNOPQRSTUVWYZ", "X"],
            ["ABCDEGHIJKLMNOPQRSTUVWXYZ", "F"],
            ["ABCDEFGHIJKMNOPQRSTUVWXYZ", "L"],
            ["ABCDEFGHIJKLMNPQRSTUVWXYZ", "O"]
        ];

        test.each(scenarios)(
            "When call the function with %p then should return %p",
            (scenario, result) => {
                expect(missingLetter([...scenario])).toBe(result);
            }
        );
    });

    describe("Given a alphabet sequence starting at a letter different from 'A'", () => {
        it("Then it will return the correct missing letter considering the sequence on", () => {
            expect(missingLetter(["F", "G", "I"])).toBe("H");
        })
    });
})