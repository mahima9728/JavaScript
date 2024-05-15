let a = "Here is a string";
console.log(a);

let b = "And this is my name"
//This is better way to use interpolation

// console.log(`This is a para , ${a} and another one , ${b}`);

const gameName = new String('Mahima-MR')
console.log(gameName);
console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.charAt(0));
console.log(gameName.charAt(3));
console.log(gameName.charAt(5));
console.log(gameName.indexOf("r"));
console.log(gameName.substring(0, 4));

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newString = "    Ceasar   "
console.log(newString);
console.log(newString.trim());
const url = "https://mahima.com/mahima%20rawat"

// console.log(url.replace('20%', '-'));
console.log(url);
