//For.....in Loop

const userOne = {
name : 'Shaon',
age : 18,
hobby : 'Fishing',

}

for (let i in userOne){
  console.log(i,':', userOne[i] );
}

const friend = ['Rahim', 'Karim', 'Rubel', 'Riaz'];

for (let i in friend){
  console.log(i, ':', friend[i]);
}