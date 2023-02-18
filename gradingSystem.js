// Grading System Problem Solving

let mark = 81;
let message;

if (mark >=80 && mark <=100){
  message = 'A+';
}
else if (mark >=70 && mark <=79){
  message = 'A';
}
else if (mark >=60 && mark <=69){
  message = 'A-';
}
else if (mark >=50 && mark <=59){
  message = 'B';
}
else if (mark >=40 && mark <=49){
  message = 'C';
}
else if (mark >=33 && mark <=39){
  message = 'D';
}
else if (mark >=0 && mark <=32){
  message = 'F';
}
else{
  message = 'Invalid Marks';
}

console.log(message);