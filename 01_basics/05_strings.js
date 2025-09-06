const Fullname = "   Vanisha Gupta  "
const repoCount = 50

console.log(Fullname + repoCount + " Value");

console.log(`${Fullname} has ${repoCount} repo`);//backticks use

const gameName = new String('HELLO WORLD');//object string
console.log(gameName);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('W'));
console.log(gameName.split(''));
console.log(gameName.replace('WORLD', 'THERE'));
console.log(gameName.includes('HELLO'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(1, 4)
console.log(anotherString);

console.log(Fullname.trim()); //remove extra spaces

const url = "https://Vanisha.com/Vanisha%20Gupta"

console.log(url.replace('%20', '-'))

console.log(url.includes('hello'))

console.log(gameName.split('-'));

