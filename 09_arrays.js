const myArr = [1, 3, 5, 2, 6, 7]
const myHero = ["Cap", "Thor", "Strange", "Tony"]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[0]);
// console.log(myArr[1]);
// console.log(myArr[2]);
// // console.log(myArr);
// myArr.push(8);
// myArr.pop()
// console.log(myArr);

//Slice & Splice

console.log("A", myArr);

const myNA = myArr.slice(1, 3);

console.log(myNA);
console.log("B", myArr);

const myNA2 = myArr.splice(1, 3);
console.log(myNA2);
console.log("C", myArr);