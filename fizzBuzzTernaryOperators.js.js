let number = 19;

let message = number%3 && number%3 === 0 ? 'FizBuzz' : number%3 === 0 ? 'Fizz' : number%5 === 0 ? 'Buzz' : 'Nothing';

console.log(message);