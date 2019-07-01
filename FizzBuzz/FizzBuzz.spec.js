function fizzBuzz(num) {
    if (num% 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    }
    if (num.toString().includes('3') && num.toString().includes('5')) {
        return 'FizzBuzz'
    }
    if (num % 3 === 0) {
        return 'Fizz'
    }
    if (num % 5 === 0) {
        return 'Buzz'
    }

    if (num.toString().includes('3')) {
        return 'Fizz'
    }
    if (num.toString().includes('5')) {
        return 'Buzz'
    }
    return num;
}

test.each([
    [1, 1],
    [3, 'Fizz'],
    [5, 'Buzz'],
    [15, 'FizzBuzz'],
    [31, 'Fizz'],
    [52, 'Buzz'],
    [53, 'FizzBuzz']
])('Input %s ouput %s', (a, b) => {
    expect(fizzBuzz(a)).toEqual(b)
})
