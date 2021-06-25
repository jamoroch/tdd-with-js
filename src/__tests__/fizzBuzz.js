const fizzBuzz = require('../fizzBuzz');

test("FizzBuzz of 1 is 1", () => expect(fizzBuzz.getWord(1)).toBe(1));

test("FizzBuzz  of 3 is Fizz", () => expect(fizzBuzz.getWord(3)).toBe('Fizz'));

test("FizzBuzz of 5 is Buzz", () => expect(fizzBuzz.getWord(5)).toBe('Buzz'));

test("FizzBuzz of 15 is FizzBuzz", () => expect(fizzBuzz.getWord(15)).toBe("FizzBuzz"));

test("FizzBuzz of 6 first integers", () => expect(fizzBuzz.getArray(6)).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz"]));

test("FizzBuzz of [14,15,16]", () => expect(fizzBuzz.getArrayFromTo(14,16)).toEqual([14, "FizzBuzz", 16]));