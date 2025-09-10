//singleton 
//object constructor: a single instance is created
//object literal: no singleton is created
//Object.create is used to create a new object with the specified prototype object and properties.


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)//not better to use
console.log(JsUser["email"])//better to use 
console.log(JsUser["full name"])