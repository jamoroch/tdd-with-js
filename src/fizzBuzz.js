const fizzBuzz = {
    'getWord': (x) => {
        let output = x;
        if (x % 3 === 0 && x % 5 === 0) {
            output = 'FizzBuzz';
        } else if (x % 3 === 0) {
            output = 'Fizz';
        } else if (x % 5 === 0) {
            output = 'Buzz';
        }
        return output;
    },
    getArray(x) {
        return this.getArrayFromTo(1, x);
    },
    getArrayFromTo(from, to) {
        let result = [];
        for (let i = from; i <= to; i++) {
            result.push(this.getWord(i));
        }
        return result;
    }
};
module.exports = fizzBuzz;