let range = 10;
let randomNumber1 = Math.round(Math.random() * range );
let randomNumber2 = Math.round(Math.random() * range );
let randomNumber3 = Math.round(Math.random() * (randomNumber1 * randomNumber2 * range));
let randomNumber4 = Math.round(Math.random() * (randomNumber3 * (10 ** 5)));
console.log(randomNumber4)