// const tinderUser = new Object() //Singleton object
const tinderUser = {} //non singleton object

tinderUser.name = "Laila"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    username: {
      firstname: "Mahima",
      lastname: "Rawat"
    }

  }
}

// console.log(regularUser.fullname.username.firstname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj4 = { 5: "c", 6: "d" }
const obj5 = { 7: "c", 8: "d" }

// const obj3 = Object.assign({}, obj1, obj2, obj4, obj5)
const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com,"
  },
  {
    id: 2,
    email: "h@gmail.com,"
  },
  {
    id: 3,
    email: "h@gmail.com,"
  },
  {
    id: 4,
    email: "h@gmail.com,"
  },
  {
    id: 5,
    email: "h@gmail.com,"
  }
]
users[1].email
console.log(tinderUser);
// console.log(Object.keys(tinderUser))

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
