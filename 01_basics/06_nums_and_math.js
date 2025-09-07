const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));// 1 decimal place
// console.log(balance.toFixed(2));// 2 decimal place


// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); // total length

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
// console.log(hundreds.toLocaleString('de-DE')); // 1.000.000
// console.log(hundreds.toLocaleString('en-US')); // 1,000,000

// console.log("Maths stuff....");

// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // 0 - 0.9999999
console.log(Math.floor(Math.random() * 10)); // 0 - 9
console.log(Math.floor(Math.random() * 100)); // 0 - 99
console.log(Math.floor(Math.random() * 20)); // 0 - 19

console.log((Math.random()*10) + 1); // 1 - 10
console.log(Math.floor(Math.random()*10) + 1); // 1 - 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10 - 20