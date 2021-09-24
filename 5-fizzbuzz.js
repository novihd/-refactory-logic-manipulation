function fizzBuzz(number) {
    const range = [];
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            range.push('FizzBuzz');
        } else if (i % 3 === 0) {
            range.push('Fizz');
        } else if (i % 5 === 0){
            range.push('Buzz');
        } else {
            range.push(i);
        }
    }
    return range
}

const input = parseInt(prompt("Enter a number: "))

console.log(fizzBuzz(input))