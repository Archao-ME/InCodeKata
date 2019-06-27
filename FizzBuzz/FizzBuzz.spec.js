function getFizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz'
    }
    if (number.toString().indexOf('5') >= 0 && number.toString().indexOf('3') >= 0) {
        return 'FizzBuzz'
    }
    if (number % 3 === 0) {
        return 'Fizz'
    }
    if (number % 5 === 0) {
        return 'Buzz'
    }
    if(number.toString().indexOf('3') >= 0) {
        return 'Fizz'
    }

    if (number.toString().indexOf('5') >= 0) {
        return 'Buzz'
    }
}
// TODO: 用Each遍历测试
test('should return Fizz if input 3', () => {
    expect(getFizzBuzz(3)).toEqual('Fizz')
})
test('should return Buzz if input 5', () => {
    expect(getFizzBuzz(5)).toEqual('Buzz')
})

test('should return FizzBuzz if input 15', () => {
    expect(getFizzBuzz(15)).toEqual('FizzBuzz')
})

test('should return Fizz if includes "3"', () => {
    expect(getFizzBuzz(13)).toEqual('Fizz')
})

test('should return Buzz if includes "5"', () => {
    expect(getFizzBuzz(52)).toEqual('Buzz')
})

test('should return Buzz if includes "5" and "3"', () => {
    expect(getFizzBuzz(53)).toEqual('FizzBuzz')
})


