function fizzBuzz (param) {
    if (param % 3 === 0 && param % 5 === 0) {
        return 'FizzBuzz'
    }
    if (param % 3 === 0) {
        return 'Fizz'
    }
    if (param % 5 === 0) {
        return 'Buzz'
    }
    return param
}

test('should be buzz if it can be divisible by 3 ', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
})

test('should be buzz if it can be divisible by 5 ', () => {
    expect(fizzBuzz(5)).toEqual('Buzz')
    expect(fizzBuzz(20)).toEqual('Buzz')
})

it('should be FizzBuzz when it is divisible by 3 and 5', function () {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
})

test('should return itself when it is not divisible by 3 or 5', () => {
    expect(fizzBuzz(2)).toEqual(2)
})


