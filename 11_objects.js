//Singleton

//object literals

// Object.create

//USing Symbols
const mySym = Symbol("key1")

const JsUser = {
  name: "Mahima",
  "full name": "Mahima Rawat",
  [mySym]: "myKeyValue",
  age: 26,
  location: "Indore",
  email: "abc@123gmail.com",
  isLoggedIn: false,
  lastLogInDays: ["Monday", "Thursday"]
}

JsUser.email = "xyz@123gmail.com",
  // Object.freeze(JsUser)

  JsUser.location = "Mumbai",

  console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);
console.log(JsUser.location);
// console.log(JsUser);

JsUser.greetings = function () {
  console.log(`Hello Js user`);
}
JsUser.greetingstwo = function () {
  console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());