// // a = "Hello";
// // console.log(a);
// // a = 12;
// // console.log(a);
// // a = null + 12;
// // console.log(a);


// const heros = ["CAP", "Iron man", "Thor", "Hulk"]
// let obj = {
//   name: "Mahima",
//   age: 22,
// }
// console.log(heros[3]);
// console.log(obj);
// // console.log(nam);
// function nam() {
//   a = "Hello There!";
//   console.log(a);
// }
// // console.log(nam);
// nam()

//Stack (Primitive) and Heap memory (Non-Primitive)

let a = "My name";
let b = a;
b = " Your name";
console.log(b);
console.log(a);

let user1 = {
  email: "useremail.com",
  upi: "user@ybl"
}
let user2 = user1
user2.email = "Myemail.com";


console.log(user1.email);
console.log(user2.email);