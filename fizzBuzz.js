let number = 15;
let message;
if (number % 3 === 0 && number % 5 === 0 ){
  message = 'FizzBuzz';
}
else if (number % 3 === 0){
  message = 'Fizz';
}
else if (number % 5 === 0){
  message = 'Buzz';
}
else {
  message = 'Nothing';
}

console.log(message);