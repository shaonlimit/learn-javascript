// JavaScript Function

function calculateSum (num1, num2)
{
  const sum = num1 + num2;
 return sum;
}

function calculateSub (num1, num2)
{
  const sub = num1 - num2;
  return sub;
}

function calculateMul (num1, num2)
{
  const mul = num1 * num2;
  return mul;
}

function calculateDiv (num1, num2)
{
  const div = num1 / num2;
  return div;
}

let result;


result = calculateSum(10,20);
console.log("The sum: "+result);

result = calculateSub(+60,20);
console.log("The subtraction: "+result);

result = calculateMul(10,20);
console.log("The multiplication: "+result);

result = calculateDiv(65,20);
console.log("The division: "+result);




